//para usar typeORM primero debemos descargarlo: npm install --save @nestjs/typeorm typeorm mysql2
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm'; // Aquí importamos TypeOrmModule (el modulo de typeORM) para posteriormente declarar la conexión con nuestra base de datos. 
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ 
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'api',
      entities:[__dirname + '/**/*.entity{.ts,.js}'], //estos nos indica que en el direcctorio se buscaran los archivos con terminación .entity.ts o .entity.js, los cuales nos ayudaran a crear la base de datos de cada entidad que ocupemos.
      synchronize: true,
    
    
    }),
    /*DatabaseModule,*/
    UsersModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
