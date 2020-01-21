import {
  Controller,
  Get,
  Req,
  Post,
  HttpCode,
  Header,
  Param,
  Body,
  Redirect,
  Query
} from '@nestjs/common';
import { CreateCatDto } from '../create-cat-dto';
import { Cat } from './interfaces/cat.interface'
import { CatsService } from './cats.service'
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @HttpCode(200)
  @Header('Cache-Control', 'defineHeader')
  async create(@Body() createCatDto:CreateCatDto) {
    this.catsService.create(createCatDto)
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get('docs')
  @Redirect('localhost:3000/cats', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      console.log(version)
      return { url: 'localhost:3000/cats/12', statusCode: 302 };
    }
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return `接受路由中的参数：${id}` ;
  }
}
