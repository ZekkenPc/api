import { Body, Controller, Post, Get, Param, ParseIntPipe, Delete, Patch} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { promises } from 'dns';
import { User } from './user.entity';
import path from 'path';
import { Update } from 'drizzle-orm';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}

    @Get() 
    getUsers():Promise<User[]> // Utilizamos  la promesa para manejar  fallas y definimos el tipo de dato que nos retornará, es este caso nos regresará un arrylist de tipo user
    {
        return this.userService.getUsers(); 
    }

    @Get(':id') //Este es un get que nos ayudara a encontrar a un usuario especifico utilizando un parámetro, en este caso utilizando el id
    getUser( @Param('id', ParseIntPipe)id:number):
    Promise<User | null> // definimos que pueda ser null debido a que puede ser que no encontremos nada
    {
        return this.userService.getUser(id); //llamamos al metodo return el cual le tenemos que pasar el id
    }

    @Post() //Declaramos el metodo http que utilizaremos (Post, Delete, Get, Put utilizando el decorador @ )
    createUser(@Body() newUser: CreateUserDto): Promise<User>
    { //
        return this.userService.createUser(newUser);
    }

   @Delete(':id') //Definimos la ruta que seguira en este caso: localhost/user/id
   deleteUser(@Param('id', ParseIntPipe) id: number)//definimos el parametro que vamos a usar y lo convertimos a numero utilizando ParseIntPipe 
   {
        return  this.userService.deleteUser(id); //Llamamos al servicio de usuario usamos el metodo delete, dándole el id del dato que eliminara
   }

   @Patch(':id')
   updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: UpdateUserDto){ 
    return this.userService.updateUser(id, user);
   }




}
