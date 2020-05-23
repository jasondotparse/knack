import { SavedThought } from "../thoughts";

function fixTimestamps(json: any): SavedThought {
  const createdAt: Date = new Date(json.createdAt);
  const updatedAt: Date = new Date(json.updatedAt);
  return {
    createdAt,
    updatedAt,
    ...json,
  };
}
export default function(data: any): SavedThought[] {
  return data
    .map(([_, value]: any) => JSON.parse(value))
    .filter((n: any) => n) // Worst case scenario, if bad data gets in we don't show it.
    .map(fixTimestamps);
}
