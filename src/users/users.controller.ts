import { Controller, Param, Get, Put, Body } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('profile')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  getOne(@Param('id') id: number): Promise<UserEntity> {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  updateOne(@Param('id') id: number, @Body() dto: UpdateUserDto) {
    return this.usersService.updateUser(id, dto);
  }
}
