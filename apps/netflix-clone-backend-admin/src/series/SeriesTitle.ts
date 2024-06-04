import { Series as TSeries } from "../api/series/Series";

export const SERIES_TITLE_FIELD = "title";

export const SeriesTitle = (record: TSeries): string => {
  return record.title?.toString() || String(record.id);
};
