import { CreateCatDto } from '../create-cat-dto';
import { Cat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    create(createCatDto: CreateCatDto): Promise<void>;
    findAll(): Promise<Cat[]>;
    getDocs(version: any): {
        url: string;
        statusCode: number;
    };
    findOne(id: any): string;
}
