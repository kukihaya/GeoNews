import { useEffect, useRef, useState, useCallback } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { NewsEvent } from "../types";
import { CATEGORY_COLORS } from "../types";
import { sampleEvents } from "../data/events";
import NewsPanel from "./NewsPanel";
import SearchBar from "./SearchBar";

interface MarkerEntry {
  marker: maplibregl.Marker;
  element: HTMLElement;
  event: NewsEvent;
}

export default function WorldMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const markersRef = useRef<MarkerEntry[]>([]);
  const searchFilterRef = useRef<Set<string> | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<NewsEvent | null>(null);
  const [zoomLevel, setZoomLevel] = useState(2);

  const applyVisibility = useCallback(() => {
    if (!map.current) return;
    const zoom = map.current.getZoom();
    const threshold = zoom < 3 ? 85 : zoom < 5 ? 70 : zoom < 7 ? 50 : 0;
    const size = zoom < 3 ? "small" : zoom < 6 ? "medium" : "large";
    const showLabels = zoom >= 4;
    const filter = searchFilterRef.current;

    for (const entry of markersRef.current) {
      const { element, event } = entry;

      const passesImportance = event.importance >= threshold;
      const passesSearch = filter === null || filter.has(event.id);
      const visible = passesImportance && passesSearch;

      element.style.display = visible ? "" : "none";

      if (filter && filter.has(event.id)) {
        element.classList.add("marker-highlighted");
      } else {
        element.classList.remove("marker-highlighted");
      }

      element.classList.remove("marker-small", "marker-medium", "marker-large");
      element.classList.add(`marker-${size}`);

      const label = element.querySelector(".marker-label") as HTMLElement;
      if (label) {
        label.style.display = showLabels ? "" : "none";
      }
    }
  }, []);

  const handleSearchFilter = useCallback(
    (matchedIds: Set<string> | null) => {
      searchFilterRef.current = matchedIds;
      applyVisibility();
    },
    [applyVisibility]
  );

  const handleSearchSelect = useCallback((event: NewsEvent) => {
    setSelectedEvent(event);
    if (map.current) {
      map.current.flyTo({
        center: [event.longitude, event.latitude],
        zoom: 6,
        duration: 1500,
      });
    }
  }, []);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          "osm-tiles": {
            type: "raster",
            tiles: [
              "https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
              "https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
              "https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
            ],
            tileSize: 256,
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
          },
        },
        layers: [
          {
            id: "osm-tiles-layer",
            type: "raster",
            source: "osm-tiles",
            minzoom: 0,
            maxzoom: 19,
          },
        ],
      },
      center: [0, 20],
      zoom: 2,
      minZoom: 1.5,
      maxZoom: 15,
    });

    map.current.addControl(new maplibregl.NavigationControl(), "top-right");

    map.current.on("load", () => {
      for (const event of sampleEvents) {
        const el = createMarkerElement(event);
        el.addEventListener("click", (e) => {
          e.stopPropagation();
          setSelectedEvent(event);
        });

        const marker = new maplibregl.Marker({
          element: el,
        })
          .setLngLat([event.longitude, event.latitude])
          .addTo(map.current!);

        markersRef.current.push({ marker, element: el, event });
      }

      applyVisibility();
    });

    map.current.on("zoom", () => {
      const zoom = map.current!.getZoom();
      setZoomLevel(Math.round(zoom * 10) / 10);
      applyVisibility();
    });

    return () => {
      map.current?.remove();
      map.current = null;
      markersRef.current = [];
    };
  }, [applyVisibility]);

  return (
    <div className="app-container">
      <SearchBar
        onSelectEvent={handleSearchSelect}
        onFilterChange={handleSearchFilter}
      />
      <header className="app-header">
        <h1 className="app-title">GeoNews</h1>
        <div className="zoom-indicator">
          <span className="zoom-label">Zoom</span>
          <span className="zoom-value">{zoomLevel.toFixed(1)}</span>
        </div>
      </header>
      <div ref={mapContainer} className="map-container" />
      {selectedEvent && (
        <NewsPanel
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
}

function createMarkerElement(event: NewsEvent): HTMLElement {
  const color = CATEGORY_COLORS[event.category];

  const container = document.createElement("div");
  container.className = "news-marker marker-small";

  const thumbnail = document.createElement("div");
  thumbnail.className = "marker-thumbnail";
  thumbnail.style.borderColor = color;
  thumbnail.style.backgroundImage = `url(${event.thumbnailUrl})`;

  const pulse = document.createElement("div");
  pulse.className = "marker-pulse";
  pulse.style.borderColor = color;

  const label = document.createElement("div");
  label.className = "marker-label";
  label.style.display = "none";
  label.textContent =
    event.title.length > 30 ? event.title.slice(0, 30) + "…" : event.title;

  container.appendChild(pulse);
  container.appendChild(thumbnail);
  container.appendChild(label);

  return container;
}
