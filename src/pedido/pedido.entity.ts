import { tinyint } from "drizzle-orm/mysql-core"
import { Rol } from "src/users/user.entity"
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'pedido'})
export class User{
    //Utilizamos el decorador que estan definidos con un @ al inicio 
    @PrimaryGeneratedColumn()
    id: number //nombre y tipo

    @Column() 
    nombre:string 

    @Column({unique: true})
    correo:string
    
    @Column()
    password: string
   
    @Column({type: 'boolean', default:false})
    Actividad: boolean;


    @Column({type: 'datetime', default: ()=> 'CURRENT_TIMESTAMP'})
    createAt: Date
   
//Aqui creamos un tipo de dato enum que nos va a dar el valor repartidor o usuario. Utilizamos Rol que esta afuera del entity

   
}

