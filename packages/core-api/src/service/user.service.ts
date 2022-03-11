import { Injectable } from '@nestjs/common';
import { sequelize } from '@db/main';

@Injectable()
export class UserService {
  async setUserData(data: string): Promise<string> {
    await sequelize.model('user').create({ userId: 'trest', pass: 'adsf' });
    return 'SUCCESS';
  }
  getHello(): string {
    return 'Hello World!';
  }
}
