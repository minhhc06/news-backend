import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class News {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    author: string;

    @Column()
    id_category: number;

}