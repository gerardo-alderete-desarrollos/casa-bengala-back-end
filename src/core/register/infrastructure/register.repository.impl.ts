import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterRepository } from '../domain/register.repository';
import { Register } from '../domain/register.entity';
import { RegisterOrmEntity } from './register.orm-entity';
import { RegisterMapper } from './mappers/register.mapper';

@Injectable()
export class RegisterRepositoryImpl implements RegisterRepository {
  constructor(
    @InjectRepository(RegisterOrmEntity)
    private readonly ormRepo: Repository<RegisterOrmEntity>,
  ) {}

  async create(register: Register): Promise<Register> {
    const ormEntity = RegisterMapper.toOrm(register);
    const saved = await this.ormRepo.save(ormEntity);
    return RegisterMapper.toDomain(saved);
  }

  async findAll(): Promise<Register[]> {
    const records = await this.ormRepo.find();
    return records.map(RegisterMapper.toDomain);
  }
}
