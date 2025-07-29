import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UserDTO } from "./dto/users.dto";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }
    
    @Get()
    getAll(){
        return this.usersService.findAll()
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id)
    }

    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true }))
    create(@Body() dto: UserDTO) {
        this.usersService.create(dto)
        return { message: 'User created successfully' }
    }

    @Delete(':id')
    delete (@Param('id', ParseIntPipe) id: number){
        this.usersService.delete(id)
        return { message: 'User deleted successfully' }
    }
}