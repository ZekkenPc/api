//Creamos un el controlador de autentificación
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';


@Controller('auth')
export class AuthController {
 
  constructor(private readonly  authService: AuthService) {
    this.authService= authService
  }

  @Post('/register')
  register(
    @Body()
    RegisterDto:CreateAuthDto
  ) {
    return this.authService.register(RegisterDto);
  }
  
@Post('/login')
login(){

}

 

  @Post('/logout')
  logout() {
  }

  
  @Post('/refresh')
  refreshTokens() {
   
  }
 

 
  
}
