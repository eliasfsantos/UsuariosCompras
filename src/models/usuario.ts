import { IsEmail, Length, ValidateNested } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Endereco } from './endereco';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column()
  senha: string;

  @ValidateNested()
  @OneToMany(type => Endereco, endereco => endereco.usuario, {
    cascade: true
  }) // note: we will create usuario property in the Endereco class below
  enderecos: Endereco[];
}