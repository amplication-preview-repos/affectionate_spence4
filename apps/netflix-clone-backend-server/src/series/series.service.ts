import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SeriesServiceBase } from "./base/series.service.base";

@Injectable()
export class SeriesService extends SeriesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
