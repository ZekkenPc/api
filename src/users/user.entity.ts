
//Cada entity que creemos nos generar una tabla en la base de datos que seleccionemos, esto se generara gracias al uso de typeORM que nos permitirá la conexión y creación de tablas en la base de datos.En este caso creamos la tabla del usuario, con la primarykey, username, password, fecha de creacion y autentificación 

import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"

export enum Rol{
    ADMIN = 'admin',
    USER = 'repartidor'
}

@Entity({name: 'users'})
export class User{
    //Utilizamos el decorador que estan definidos con un @ al inicio 
    @PrimaryGeneratedColumn()
    id: number //nombre y tipo

    @Column({nullable:false}) //entre paréntesis podemos agregar propiedades únicas 
    nombre:string 

    @Column({nullable:false})
    apellido:string

    @Column({unique: true})
    correo:string
    
    @Column({nullable:false})
    password: string
   
    @Column({type: 'boolean', default:false})
    Actividad: boolean;

    @Column({type:'enum', enum: Rol, default:Rol.USER})
    rol: Rol;

    @Column({type: 'datetime', default: ()=> 'CURRENT_TIMESTAMP'})
    createAt: Date
   
//Aqui creamos un tipo de dato enum que nos va a dar el valor repartidor o usuario. Utilizamos Rol que esta afuera del entity

   
}