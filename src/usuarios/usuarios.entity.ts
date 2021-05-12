import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Endereco } from './endereco.entity';

@Entity()
export class Usuarios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @OneToOne(() => Endereco)
  @JoinColumn()
    endereco: Endereco
}