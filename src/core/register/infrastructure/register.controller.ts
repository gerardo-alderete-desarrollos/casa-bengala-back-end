import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { RegisterService } from '../application/register.service';
import { CreateRegisterDto } from './dto/create-register.dto';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async create(@Body() body: CreateRegisterDto) {
    return this.registerService.create(body);
  }

  @Get()
  async findAll() {
    return this.registerService.findAll();
  }
}
