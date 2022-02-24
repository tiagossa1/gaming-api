import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { Developer } from "./Developer";
import { Genre } from "./Genre";
import { Platform } from "./Platform";

@Entity()
export class Game {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    releaseDate: Date;

    @Column("integer")
    age: number;

    @ManyToMany(() => Platform)
    @JoinTable()
    platforms: Platform[];

    @ManyToMany(() => Genre)
    @JoinTable()
    genres: Genre[];

    @ManyToMany(() => Developer)
    @JoinTable()
    developers: Developer[];

    @Column()
    createdAt: Date;
}