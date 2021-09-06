import { Category } from 'src/filter-category/filter-category.entity';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Users{
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @OneToMany((_type) => Category, (category) => category.user, { eager: true })
    category: Category[];

}