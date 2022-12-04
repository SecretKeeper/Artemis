import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ default: 'SecretKeeper', required: true })
  @IsNotEmpty()
  @Length(3, 33)
  username: string;

  @IsEmail()
  email: string;

  @ApiProperty({ default: 'secret', required: true })
  @IsNotEmpty()
  @Length(8)
  password: string;
}
