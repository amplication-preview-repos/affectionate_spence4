import { SortOrder } from "../../util/SortOrder";

export type SeriesOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  genre?: SortOrder;
  id?: SortOrder;
  releaseDate?: SortOrder;
  seasons?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
