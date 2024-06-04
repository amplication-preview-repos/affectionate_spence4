import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type SeriesWhereInput = {
  description?: StringNullableFilter;
  genre?: StringNullableFilter;
  id?: StringFilter;
  releaseDate?: DateTimeNullableFilter;
  seasons?: IntNullableFilter;
  title?: StringNullableFilter;
};
