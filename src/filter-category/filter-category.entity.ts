import { Exclude } from 'class-transformer';
import { Users } from 'src/auth/user.entitys';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name_category: string;

    @ManyToOne((_type) => Users, (user) => user.category, {eager : false})
    @Exclude({ toClassOnly: true})
    user: Users
}