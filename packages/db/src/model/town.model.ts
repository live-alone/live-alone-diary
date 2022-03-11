import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  modelName: 'town',
  timestamps: false,
})
export class TownModel extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @Column
  district: string;
  @Column
  town: string;
}
