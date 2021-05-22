import { Endereco } from "src/models/endereco";
import { Usuario } from "src/models/usuario";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Compra {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Usuario)
    @JoinColumn()
    usuario: Usuario

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