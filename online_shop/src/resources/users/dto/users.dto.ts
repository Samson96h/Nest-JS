import { IsString, IsInt, Min, Max, IsEmail, IsPhoneNumber, MinLength } from 'class-validator';

export class UserDTO {
    @IsString()
    readonly first_name: string;

    @IsString()
    readonly last_name: string;

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

}