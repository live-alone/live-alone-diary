import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  modelName: 'user',
})
export class UserModel extends Model {
  @Column({
    primaryKey: true,
  })
  userId: string;
  @Column
  pass: string;
}
