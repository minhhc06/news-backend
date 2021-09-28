import { Module } from "@nestjs/common";
import { NewsUploadImagesController } from "./upload-images.controller";

@Module({
    imports: [],
    controllers: [NewsUploadImagesController],
    providers: [],
  })


export class UploadImagesModule {}