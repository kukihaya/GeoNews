import type { NewsEvent } from "../types";
import { CATEGORY_COLORS, CATEGORY_LABELS } from "../types";

interface NewsPanelProps {
  event: NewsEvent;
  onClose: () => void;
}

function timeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

  if (diffHours < 1) return "Just now";
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}d ago`;
}

export default function NewsPanel({ event, onClose }: NewsPanelProps) {
  const categoryColor = CATEGORY_COLORS[event.category];

  return (
    <div className="news-panel-overlay">
      <div className="news-panel">
        <button className="panel-close" onClick={onClose}>
          ×
        </button>

        <div className="panel-hero">
          <img src={event.thumbnailUrl} alt={event.title} />
          <div className="panel-hero-overlay">
            <span
              className="panel-category"
              style={{ backgroundColor: categoryColor }}
            >
              {CATEGORY_LABELS[event.category]}
            </span>
          </div>
        </div>

        <div className="panel-content">
          <div className="panel-meta">
            <span className="panel-location">
              {event.region}, {event.country}
            </span>
            <span className="panel-time">{timeAgo(event.publishedAt)}</span>
          </div>

          <h2 className="panel-title">{event.title}</h2>
          <p className="panel-summary">{event.summary}</p>

          <div className="panel-importance">
            <span className="importance-label">Importance</span>
            <div className="importance-bar">
              <div
                className="importance-fill"
                style={{
                  width: `${event.importance}%`,
                  backgroundColor: categoryColor,
                }}
              />
            </div>
            <span className="importance-value">{event.importance}</span>
          </div>

          <div className="panel-sources">
            <h3>Sources ({event.sources.length})</h3>
            <ul>
              {event.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer">
                    {source.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel-coordinates">
            <span>
              {event.latitude.toFixed(2)}°{event.latitude >= 0 ? "N" : "S"},{" "}
              {Math.abs(event.longitude).toFixed(2)}°
              {event.longitude >= 0 ? "E" : "W"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
