import { SeriesWhereUniqueInput } from "./SeriesWhereUniqueInput";
import { SeriesUpdateInput } from "./SeriesUpdateInput";

export type UpdateSeriesArgs = {
  where: SeriesWhereUniqueInput;
  data: SeriesUpdateInput;
};
