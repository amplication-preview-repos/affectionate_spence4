import { Module } from "@nestjs/common";
import { SeriesModuleBase } from "./base/series.module.base";
import { SeriesService } from "./series.service";
import { SeriesController } from "./series.controller";
import { SeriesResolver } from "./series.resolver";

@Module({
  imports: [SeriesModuleBase],
  controllers: [SeriesController],
  providers: [SeriesService, SeriesResolver],
  exports: [SeriesService],
})
export class SeriesModule {}
