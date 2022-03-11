import { Injectable } from '@nestjs/common';
import { sequelize } from '@db/main';

@Injectable()
export class AreaService {
  async getAreaList(modelName: string): Promise<string[]> {
    const result = [];
    (await sequelize.model(modelName).findAll()).forEach((model) => {
      result.push(model[modelName]);
    });
    return result;
  }
}
