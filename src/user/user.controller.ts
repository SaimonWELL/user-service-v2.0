import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('reset-problems')
    async resetProblems(): Promise<{ count: number }> {
        const count = await this.userService.resetProblemsFlag();
        return { count };
    }
}
