import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule} from '@nestjs/typeorm'
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], //Aquí especificamos la entidad o entity que usaremos, utilizamos forFeature y entre los parentesis y corchetes nombramos a la entidad
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
