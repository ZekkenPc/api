//en los services declararemos la lógica de nuestro programa y en los controllers simplemente llamaremos a las funciones.
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import {CreateUserDto} from './dto/create-user.dto'

@Injectable()
export class UsersService {
   constructor (@InjectRepository(User) //Aquí importamos al user de la function que lo declara en user.entity.ts y asi poder utilizar su molde para crear a nuestro usuarios
    private userRepository: Repository<User> //Aquí le damos el nombre userRepository y le decimos que repository sea de tipo user. Gracias a esto creamos el repositorio que nos permite hacer un CRUD
    ) {}
 
    //Creamos la función/método createUser para crear a nuestros usuarios que nos retornara el guardado de nuestro nuevo usuario
    createUser(user: CreateUserDto){ //recibimos la variable user que va a ser tipo CreateUserDto, que es un data transfer object el cual tienen username y password
       const newUser= this.userRepository.create(user) // el user que nos dan se lo asignamos a newUser
       return this.userRepository.save(newUser) // guarda el usuario en el repositorio 
    }
}
