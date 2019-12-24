import { CreateCatDto } from '../create-cat-dto';
export declare class CatsController {
    createCat(createCatDto: CreateCatDto): string;
    findAllCats(request: any): string;
    findOne(params: any): string;
}
