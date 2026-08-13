export interface NewsSource {
  name: string;
  url: string;
}

export interface NewsEvent {
  id: string;
  title: string;
  summary: string;
  latitude: number;
  longitude: number;
  country: string;
  region: string;
  category: Category;
  importance: number;
  thumbnailUrl: string;
  publishedAt: string;
  sources: NewsSource[];
}

export type Category =
  | "conflict"
  | "disaster"
  | "politics"
  | "economy"
  | "technology"
  | "environment"
  | "health"
  | "sports";

export const CATEGORY_COLORS: Record<Category, string> = {
  conflict: "#ef4444",
  disaster: "#f97316",
  politics: "#8b5cf6",
  economy: "#06b6d4",
  technology: "#3b82f6",
  environment: "#22c55e",
  health: "#ec4899",
  sports: "#eab308",
};

export const CATEGORY_LABELS: Record<Category, string> = {
  conflict: "Conflict",
  disaster: "Natural Disaster",
  politics: "Politics",
  economy: "Economy",
  technology: "Technology",
  environment: "Environment",
  health: "Health",
  sports: "Sports",
};
