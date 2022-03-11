import { Controller, Get, Query } from '@nestjs/common';
import { AreaService } from '../service/area.service';

@Controller('/area')
export class AreaController {
  constructor(private readonly appService: AreaService) {}

  @Get()
  async getAreaList(@Query('modelName') modelName: string): Promise<string[]> {
    return await this.appService.getAreaList(modelName);
  }
}
