import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Developer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    dateOfBirth: Date;

    @Column()
    createdAt: Date;
}