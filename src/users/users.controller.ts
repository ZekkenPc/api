import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}

    @Post() //Declaramos el metodo http que utilizaremos (Post, Delete, Get, Put utilizando el decorador @ )
    createUser(@Body() newUser: CreateUserDto){ //
        this.userService.createUser(newUser);
    }

}
