import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly username: string;

  @IsString()
  readonly fullName: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly profilePicture: string;
}
