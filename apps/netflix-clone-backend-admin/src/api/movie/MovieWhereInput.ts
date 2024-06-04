import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MovieWhereInput = {
  description?: StringNullableFilter;
  genre?: StringNullableFilter;
  id?: StringFilter;
  rating?: FloatNullableFilter;
  releaseDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
