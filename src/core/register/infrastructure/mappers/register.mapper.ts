import { Register } from '../../domain/register.entity';
import { RegisterOrmEntity } from '../register.orm-entity';

export class RegisterMapper {
  static toDomain(entity: RegisterOrmEntity): Register {
    return new Register(entity.id, entity.name, entity.email, entity.message);
  }

  static toOrm(domain: Register): RegisterOrmEntity {
    const ormEntity = new RegisterOrmEntity();
    ormEntity.id = domain.id;
    ormEntity.name = domain.name;
    ormEntity.email = domain.email;
    ormEntity.message = domain.message;
    return ormEntity;
  }
}
