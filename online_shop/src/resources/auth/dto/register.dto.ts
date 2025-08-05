import { IsString, IsEmail, MinLength, IsInt, Min, Max, IsPhoneNumber, IsBoolean } from 'class-validator';

export class RegisterDTO {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsInt()
  @Min(18)
  @Max(100)
  readonly age: number;

  @IsEmail()
  readonly email: string;

  @IsPhoneNumber()
  readonly phone: string;

  @IsString()
  @MinLength(6)
  readonly password: string;

  @IsBoolean()
  readonly isActive: boolean;
}