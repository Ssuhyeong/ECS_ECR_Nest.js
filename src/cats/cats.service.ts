import { Injectable } from '@nestjs/common';

// Injectable -> 이 클래스는 다른 컴포넌트로 주입될 수 있게 해줘
@Injectable()
export class CatsService {
    private cats = ['삼', '렉돌', '노르웨이 숲'];

    findAll(): string[] {
        return this.cats;
    }
}
