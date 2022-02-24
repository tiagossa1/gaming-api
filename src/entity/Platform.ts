import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Platform {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    releaseDate: Date;

    @Column()
    acronym: string;

    @Column()
    website: string;

    @Column()
    createdAt: Date;
}