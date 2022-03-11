import { Sequelize } from 'sequelize-typescript';
import { resolve } from 'path';
import { UserModel, TownModel, DistrictModel } from './model/index';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: resolve(__dirname, '../db.sqlite'),
});

sequelize.addModels([UserModel, TownModel, DistrictModel]);

export { sequelize };
