
//Cada entity que creemos nos generar una tabla en la base de datos que seleccionemos, esto se generara gracias al uso de typeORM que nos permitirá la conexión y creación de tablas en la base de datos.En este caso creamos la tabla del usuario, con la primarykey, username, password, fecha de creacion y autentificación 

import { Profile } from "./profile.entity"
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'users'})
export class User{
    //Utilizamos el decorador que estan definidos con un @ al inicio 
    @PrimaryGeneratedColumn()
    id: number //nombre y tipo

    @Column({unique: true}) //entre paréntesis podemos agregar propiedades únicas 
    username: string 
    
    @Column()
    password: string
   
    @Column({type: 'datetime', default: ()=> 'CURRENT_TIMESTAMP'})
    createAt: Date
   
    @Column({nullable: true})
    authStrategy: string

    @OneToOne(()=>Profile)
    @JoinColumn()
    profile:Profile
}