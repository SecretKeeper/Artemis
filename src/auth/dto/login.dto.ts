import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class LoginDto {
  @ApiProperty({ default: 'SecretKeeper', required: true })
  @IsNotEmpty()
  @Length(3, 33)
  username_or_email: string;

  @ApiProperty({ default: 'secret33', required: true })
  @IsNotEmpty()
  @Length(8)
  password: string;
}
