import * as graphql from "@nestjs/graphql";
import { SeriesResolverBase } from "./base/series.resolver.base";
import { Series } from "./base/Series";
import { SeriesService } from "./series.service";

@graphql.Resolver(() => Series)
export class SeriesResolver extends SeriesResolverBase {
  constructor(protected readonly service: SeriesService) {
    super(service);
  }
}
