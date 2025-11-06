import { Injectable, Inject } from '@nestjs/common';
import type { RegisterRepository } from '../domain/register.repository';
import { Register } from '../domain/register.entity';
import { CreateRegisterDto } from '../infrastructure/dto/create-register.dto';

@Injectable()
export class RegisterService {
  constructor(
    @Inject('RegisterRepository')
    private readonly registerRepo: RegisterRepository,
  ) {}

  async create(data: CreateRegisterDto): Promise<Register> {
    const register = new Register(0, data.name, data.email, data.message);
    return this.registerRepo.create(register);
  }

  async findAll(): Promise<Register[]> {
    return this.registerRepo.findAll();
  }
}
