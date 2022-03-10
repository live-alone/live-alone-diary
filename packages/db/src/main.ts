import { Sequelize } from 'sequelize-typescript';
import { resolve } from 'path';
import { UserModel } from './model/user.model';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: resolve(__dirname, 'db.sqlite'),
});

sequelize.addModels([UserModel]);

sequelize.sync().then();

export { sequelize };
