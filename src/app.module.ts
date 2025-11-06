// app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterOrmEntity } from './core/register/infrastructure/register.orm-entity';
import { RegisterController } from './core/register/infrastructure/register.controller';
import { RegisterService } from './core/register/application/register.service';
import { RegisterRepositoryImpl } from './core/register/infrastructure/register.repository.impl';
console.log('DB Host:', process.env.DB_HOST);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // disponible en todo el proyecto
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      ssl: { rejectUnauthorized: false },
      entities: [RegisterOrmEntity],
      synchronize: true, // ⚠️ solo en desarrollo
    }),
    TypeOrmModule.forFeature([RegisterOrmEntity]),
  ],
  controllers: [RegisterController],
  providers: [
    RegisterService,
    {
      provide: 'RegisterRepository',
      useClass: RegisterRepositoryImpl,
    },
  ],
})
export class AppModule {}
