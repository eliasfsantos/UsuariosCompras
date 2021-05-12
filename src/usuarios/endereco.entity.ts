import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Endereco {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    logradouro: string;

    @Column()
    numero: string;
    
    @Column()
    apartamento: boolean;
    
    @Column()
    casa: boolean;
    
    @Column()
    bairro: string;
    
    @Column()
    cep: string;
}