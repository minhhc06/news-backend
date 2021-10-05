import { Controller, Get, Param, Post, Request, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { v4 as uuidv4 } from 'uuid';
import path = require('path');
import { Observable, of } from "rxjs";
import { join } from 'path';

export const storage = {
    storage: diskStorage({
        destination: './uploads/newsimages',
        filename: (req, file, cb) => {
            const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
            const extension: string = path.parse(file.originalname).ext;

            cb(null, `${filename}${extension}`)
        }
    })

}

@Controller('news-upload-images')
export class NewsUploadImagesController {
    @Post('upload')
    @UseInterceptors(FileInterceptor('file', storage))
    uploadFile(@UploadedFile() file, @Request() req): Observable<Object> {
        // const user: User = req.user;

        // return this.userService.updateOne(user.id, {profileImage: file.filename}).pipe(
        //     tap((user: User) => console.log(user)),
        //     map((user:User) => ({profileImage: user.profileImage}))
        // )

        console.log(file);
        return of({imagePath: file.filename});

    }

    @Get('news-image/:imagename')
    findProfileImage(@Param('imagename') imagename, @Res() res): Observable<Object> {
        console.log(process.cwd());
        return of(res.sendFile(join(process.cwd(), 'uploads/newsimages/' + imagename)));
    }

}