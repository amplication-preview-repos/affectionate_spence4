/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Series as PrismaSeries } from "@prisma/client";

export class SeriesServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SeriesCountArgs, "select">): Promise<number> {
    return this.prisma.series.count(args);
  }

  async seriesItems<T extends Prisma.SeriesFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SeriesFindManyArgs>
  ): Promise<PrismaSeries[]> {
    return this.prisma.series.findMany<Prisma.SeriesFindManyArgs>(args);
  }
  async series<T extends Prisma.SeriesFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SeriesFindUniqueArgs>
  ): Promise<PrismaSeries | null> {
    return this.prisma.series.findUnique(args);
  }
  async createSeries<T extends Prisma.SeriesCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SeriesCreateArgs>
  ): Promise<PrismaSeries> {
    return this.prisma.series.create<T>(args);
  }
  async updateSeries<T extends Prisma.SeriesUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SeriesUpdateArgs>
  ): Promise<PrismaSeries> {
    return this.prisma.series.update<T>(args);
  }
  async deleteSeries<T extends Prisma.SeriesDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SeriesDeleteArgs>
  ): Promise<PrismaSeries> {
    return this.prisma.series.delete(args);
  }
}