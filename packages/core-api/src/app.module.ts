import { Module } from '@nestjs/common';
import { AreaController, UserController } from './controller';
import { AreaService, UserService } from './service';

@Module({
  imports: [],
  controllers: [UserController, AreaController],
  providers: [UserService, AreaService],
})
export class AppModule {}
