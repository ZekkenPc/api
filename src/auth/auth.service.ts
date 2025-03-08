import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  
  constructor(private readonly userService: UsersService){}

  

  async register(RegisterDto){
    return await this.userService.createUser(RegisterDto)
  }

  login(){}


  logout(){

  }
}
