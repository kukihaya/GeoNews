import { useState, useRef } from "react";
import type { NewsEvent } from "../types";
import { CATEGORY_COLORS, CATEGORY_LABELS } from "../types";
import { sampleEvents } from "../data/events";

interface SearchBarProps {
  onSelectEvent: (event: NewsEvent) => void;
  onFilterChange: (matchedIds: Set<string> | null) => void;
}

function searchEvents(query: string): NewsEvent[] {
  if (!query.trim()) return [];

  const terms = query.toLowerCase().split(/\s+/);

  return sampleEvents
    .filter((event) => {
      const searchable = [
        event.title,
        event.summary,
        event.country,
        event.region,
        event.category,
      ]
        .join(" ")
        .toLowerCase();

      return terms.every((term) => searchable.includes(term));
    })
    .sort((a, b) => b.importance - a.importance);
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

export default function SearchBar({ onSelectEvent, onFilterChange }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<NewsEvent[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function executeSearch() {
    const trimmed = query.trim();
    if (!trimmed) {
      setResults([]);
      setHasSearched(false);
      onFilterChange(null);
      return;
    }

    const matched = searchEvents(trimmed);
    setResults(matched);
    setHasSearched(true);
    onFilterChange(new Set(matched.map((e) => e.id)));
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      e.preventDefault();
      executeSearch();
    } else if (e.key === "Escape") {
      handleClear();
      inputRef.current?.blur();
    }
  }

  function handleClear() {
    setQuery("");
    setResults([]);
    setHasSearched(false);
    onFilterChange(null);
  }

  function handleSelect(event: NewsEvent) {
    onSelectEvent(event);
  }

  return (
    <div className="search-panel">
      <div className="search-panel-header">
        <div className="search-input-wrapper">
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            className="search-input"
            placeholder="Search news events..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {query && (
            <button className="search-clear" onClick={handleClear}>
              ×
            </button>
          )}
        </div>
      </div>

      {hasSearched && (
        <div className="search-results-panel">
          {results.length === 0 ? (
            <div className="search-empty">No events found for "{query}"</div>
          ) : (
            <>
              <div className="search-results-count">
                {results.length} result{results.length !== 1 ? "s" : ""}
              </div>
              <div className="search-results-list">
                {results.map((event) => (
                  <button
                    key={event.id}
                    className="search-result-item"
                    onClick={() => handleSelect(event)}
                  >
                    <div
                      className="result-thumbnail"
                      style={{ backgroundImage: `url(${event.thumbnailUrl})` }}
                    />
                    <div className="result-content">
                      <div className="result-title-row">
                        <span
                          className="result-category-dot"
                          style={{ backgroundColor: CATEGORY_COLORS[event.category] }}
                        />
                        <span className="result-category-name">
                          {CATEGORY_LABELS[event.category]}
                        </span>
                        <span className="result-time">{timeAgo(event.publishedAt)}</span>
                      </div>
                      <span className="result-title">{event.title}</span>
                      <span className="result-meta">
                        {event.region}, {event.country}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
