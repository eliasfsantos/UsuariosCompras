import { IsDefined, MinLength } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Usuario } from "./usuario";

@Entity()
export class Endereco {

    @PrimaryGeneratedColumn()
    id: number;

    @MinLength(1)
    @Column()
    logradouro: string;

    @MinLength(1)
    @Column()
    numero: string;

    @IsDefined()
    @Column()
    apartamento: boolean;

    @IsDefined()
    @Column()
    casa: boolean;

    @MinLength(1)
    @Column()
    bairro: string;

    @MinLength(1)
    @Column()
    cep: string;

    @ManyToOne(type => Usuario, usuario => usuario.enderecos)
    @JoinColumn({ name: "usuarioId" })
    usuario: Usuario
}