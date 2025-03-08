//Lo utilizaremos este data transfer object para tener actualizaciones de datos
import { IsOptional, IsString } from "class-validator"
export class UpdateUserDto {
    @IsOptional()
    @IsString()
    nombre?: string; //El signo de interrogación me dice que son opcionales esos datos
    
    @IsOptional()
    @IsString()
    apellido?:string;

    @IsOptional()
    @IsString()
    password?: string;
   
}