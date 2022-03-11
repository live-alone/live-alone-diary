import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  modelName: 'district',
  timestamps: false,
})
export class DistrictModel extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @Column
  district: string;
  @Column
  city: string;
}
