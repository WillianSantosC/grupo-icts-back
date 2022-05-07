import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './Product';

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string;

  @Column('double')
  total: number;

  @CreateDateColumn()
  data_criacao: string;

  @Column()
  tipo_pagamento: string;

  @Column()
  status: string;

  @ManyToMany((type) => Product)
  @JoinTable()
  products: Product[];
}
