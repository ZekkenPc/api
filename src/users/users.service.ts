//en los services declararemos la lógica de nuestro programa y en los controllers simplemente llamaremos a las funciones.
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import {CreateUserDto} from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
   constructor (@InjectRepository(User) //Aquí importamos al user de la function que lo declara en user.entity.ts y asi poder utilizar su molde para crear a nuestro usuarios
    private userRepository: Repository<User> //Aquí le damos el nombre userRepository y le decimos que repository sea de tipo user. Gracias a esto creamos el repositorio que nos permite hacer un CRUD
    ) {}
 
    //Creamos la función/método createUser para crear a nuestros usuarios que nos retornara el guardado de nuestro nuevo usuario
    async createUser(user: CreateUserDto){ //recibimos la variable user que va a ser tipo CreateUserDto, que es un data transfer object el cual tienen username y password
   const userFound = await this.userRepository.findOne( //Función para buscar el usuario //Cada vez que se haga una busqueda en la base de datos o un dato que vaya a tardar usamos await para evitar que nos arroje un valor true
         {
            where: {
            correo: user.correo
         }
      })

      if (userFound){
         return new HttpException ('El correo ya esta registrado', HttpStatus.CONFLICT)
      } else{
         const newUser= this.userRepository.create(user) // el user que nos dan se lo asignamos a newUser
         
       return this.userRepository.save(newUser) // guarda el usuario en el repositorio 
      }
       
    }

    getUsers(){
      return this.userRepository.find()// creamos  el método getUsers y usaremos el repositorio que creamos el cual a su vez es un metodo que viene de typeORM, este será de tipo User y simplemente añadimos find para poder encontrarlo en la base de datos
    }

    async getUser(id: number) //Declaramos la función que nos retornara un usuario único en base al id que le demos
    {
      const userFound = await this.userRepository.findOne //Utilizamos findOne para encontrar en base a un dato
      ( 
        { where: {
            id
         }}
      );

   
      if (!userFound){
         return new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
      }
      return userFound
   }

   async deleteUser(id: number){ //hacemos la función asíncrona
      
      const userFound=  await this.userRepository.findOne({where:{id}}); //Utilizamos await para esperar la respuesta y despues continuar 

      if(!userFound){
         return new HttpException("Usuario inexistente", HttpStatus.NOT_FOUND);
      }
      return this.userRepository.delete({id})

   }

   /* Otra opción:

    async deleteUser(id: number){ 
      const resultado = this.userRepository.delete({id})
      if(resultado === 0){
         return new HttpException("Usuario inexistente", HttpStatus.NOT_FOUND);
      }
      return resultado;
   }
   
   */

   async updateUser(id: number, user:UpdateUserDto ){
     const resultado = await this.userRepository.findOne(
      {
         where:{
            id
         }
      }
     )
     if(!resultado){
      return new HttpException("Usuario inexistente", HttpStatus.NOT_FOUND);
   }
   
   return this.userRepository.update({id}, user)
   }

   async login(correo:string){
      const userFound = this.getUsers()  
   }
   

}
