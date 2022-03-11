import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  @HttpCode(200)
  async setUserData(@Body('data') data: string): Promise<string> {
    return await this.appService.setUserData(data);
  }
}
