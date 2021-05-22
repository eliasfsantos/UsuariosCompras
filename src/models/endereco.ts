import { IsDefined } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Usuario } from "./usuario";

@Entity()
export class Endereco {

    @PrimaryGeneratedColumn()
    id: number;

    @IsDefined()
    @Column()
    logradouro: string;

    @IsDefined()
    @Column()
    numero: string;

    @IsDefined()
    @Column()
    apartamento: boolean;

    @IsDefined()
    @Column()
    casa: boolean;

    @IsDefined()
    @Column()
    bairro: string;

    @IsDefined()
    @Column()
    cep: string;

    @ManyToOne(type => Usuario, usuario => usuario.enderecos)
    @JoinColumn({ name: "usuarioId" })
    usuario: Usuario
}