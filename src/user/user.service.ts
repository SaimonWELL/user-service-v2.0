import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async resetProblemsFlag(): Promise<number> {
        const usersWithProblems = await this.userRepository.count({ where: { hasproblems: true } });
        await this.userRepository.update({ hasproblems: true }, { hasproblems: false });
        return usersWithProblems;
    }
}
