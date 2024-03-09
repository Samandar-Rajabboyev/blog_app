import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  async findOne(id: number): Promise<UserEntity> {
    const user = await this.usersRepository.findOne({
      where: { id: id },
    });
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = this.usersRepository.create({ ...createUserDto });

    return this.usersRepository.save(user);
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    await this.findOne(id);
    await this.usersRepository.update({ id }, { ...updateUserDto });
  }
}
