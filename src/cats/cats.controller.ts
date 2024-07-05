import { Controller, Get, Inject, Post } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    // CatsService 주입된 것을 볼 수 있다.
    @Inject(CatsService)
    private readonly catsService: CatsService;

    constructor() {}

    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }

    @Post()
    create(): string {
        return 'This action adds a new cat';
    }
}
