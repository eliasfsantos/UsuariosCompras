import { IsDate, isDate, IsDefined } from "class-validator";
import { Endereco } from "src/models/endereco";
import { Usuario } from "src/models/usuario";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Compra {
    @PrimaryGeneratedColumn()
    id: number;

    @IsDefined()
    @ManyToOne(() => Usuario)
    @JoinColumn()
    usuario: Usuario

    @IsDefined()
    @Column()
    total: string;

    @IsDefined()
    @Column()
    loja: string;

    @IsDefined()
    @IsDate()
    @Column()
    data: string;

    @IsDefined()
    @ManyToOne(() => Endereco)
    @JoinColumn()
    endereco: Endereco
}