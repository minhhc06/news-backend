import { IsNotEmpty } from "class-validator";

export class CreateNewsDto{
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    content: string;

    @IsNotEmpty()
    author: string;

    @IsNotEmpty()
    id_category: number;

    @IsNotEmpty()
    image_name: string;

}