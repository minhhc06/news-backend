import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;
}