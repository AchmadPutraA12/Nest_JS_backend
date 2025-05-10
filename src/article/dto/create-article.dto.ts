import { IsNotEmpty, IsString, IsEnum } from "class-validator";
import { ArticleStatus } from "../interface/article.interface";

export class createArticleDto {
    @IsNotEmpty({ message: "Judul tidak boleh kosong" })
    @IsString({ message: "Judul harus berupa teks" })
    title: string;

    @IsNotEmpty({ message: "Isi artikel tidak boleh kosong" })
    @IsString({ message: "Isi artikel harus berupa teks" })
    content: string;

    @IsNotEmpty({ message: "Status harus diisi" })
    @IsEnum(ArticleStatus, { message: "Status tidak valid" })
    status: ArticleStatus;
}
