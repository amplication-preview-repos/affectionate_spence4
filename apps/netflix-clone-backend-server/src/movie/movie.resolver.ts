import * as graphql from "@nestjs/graphql";
import { MovieResolverBase } from "./base/movie.resolver.base";
import { Movie } from "./base/Movie";
import { MovieService } from "./movie.service";

@graphql.Resolver(() => Movie)
export class MovieResolver extends MovieResolverBase {
  constructor(protected readonly service: MovieService) {
    super(service);
  }
}
