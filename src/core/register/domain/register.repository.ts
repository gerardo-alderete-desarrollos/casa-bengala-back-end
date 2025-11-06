import { Register } from './register.entity';

export interface RegisterRepository {
  create(register: Register): Promise<Register>;
  findAll(): Promise<Register[]>;
}
