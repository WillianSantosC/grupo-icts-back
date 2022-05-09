import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column('double')
  preco: number;

  @CreateDateColumn()
  data_criacao: string;

  @UpdateDateColumn()
  data_atualizacao: string;
}
