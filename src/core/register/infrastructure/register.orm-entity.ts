import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'registers' })
export class RegisterOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ type: 'text' })
  message: string;
}
