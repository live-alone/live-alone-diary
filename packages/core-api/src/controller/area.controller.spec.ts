import { Test, TestingModule } from '@nestjs/testing';
import { AreaController } from './area.controller';
import { AreaService } from '../service/area.service';

describe('areaController', () => {
  let appController: AreaController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AreaController],
      providers: [AreaService],
    }).compile();

    appController = app.get<AreaController>(AreaController);
  });

  describe('area', () => {
    it('area list return!!', async () => {
      const town = await appController.getAreaList('town');
      const district = await appController.getAreaList('town');
      expect(true).toBe(Array.isArray(town));
      expect(true).toBe(Array.isArray(district));
    });
  });
});
