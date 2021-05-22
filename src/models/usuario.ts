import { IsEmail, Length } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Endereco } from './endereco';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(4, 255)
  nome: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  @Length(8, 255)
  senha: string;

  @OneToMany(type => Endereco, endereco => endereco.usuario, {
    cascade: true
  }) // note: we will create usuario property in the Endereco class below
  enderecos: Endereco[];
}