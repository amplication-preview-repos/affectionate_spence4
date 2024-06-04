import { SeriesWhereInput } from "./SeriesWhereInput";
import { SeriesOrderByInput } from "./SeriesOrderByInput";

export type SeriesFindManyArgs = {
  where?: SeriesWhereInput;
  orderBy?: Array<SeriesOrderByInput>;
  skip?: number;
  take?: number;
};
