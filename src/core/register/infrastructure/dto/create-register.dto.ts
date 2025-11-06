import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateRegisterDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio.' })
  @MaxLength(100, { message: 'El nombre no puede superar los 100 caracteres.' })
  name: string;

  @IsEmail({}, { message: 'Debe proporcionar un correo electrónico válido.' })
  email: string;

  @IsNotEmpty({ message: 'El mensaje no puede estar vacío.' })
  @MaxLength(500, { message: 'El mensaje no puede superar los 500 caracteres.' })
  message: string;
}
