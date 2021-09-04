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

    @Column({ nullable: false, default:1 })
    id_category: number;

}