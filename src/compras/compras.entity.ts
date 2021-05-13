import { Endereco } from "src/usuarios/endereco.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Compras {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Usuarios)
    @JoinColumn()
    usuario: Usuarios

    @Column()
    total: string;

    @Column()
    loja: string;

    @Column()
    data: string;

    @ManyToOne(() => Endereco)
    @JoinColumn()
    endereco: Endereco
}