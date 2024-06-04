import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SeriesService } from "./series.service";
import { SeriesControllerBase } from "./base/series.controller.base";

@swagger.ApiTags("series")
@common.Controller("series")
export class SeriesController extends SeriesControllerBase {
  constructor(protected readonly service: SeriesService) {
    super(service);
  }
}
