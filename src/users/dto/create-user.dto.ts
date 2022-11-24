import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Length(3, 33)
  username: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8)
  password: string;
}
