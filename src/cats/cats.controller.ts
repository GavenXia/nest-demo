import {
  Controller,
  Get,
  Req,
  Post,
  HttpCode,
  Header,
  Param,
  Body,
} from '@nestjs/common';
import { CreateCatDto } from '../create-cat-dto';
@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(200)
  @Header('Cache-Control', 'defineHeader')
  createCat(@Body() createCatDto: CreateCatDto): string {

    return `接受到的createCatDto的数据name:${createCatDto.name}&age:${createCatDto.age}`;
  }

  @Get()
  findAllCats(@Req() request) {
    return '这里是Controller：cats的findAllCats方法～';
  }
  @Get(':id')
  findOne(@Param() params) {
    return `接受路由中的参数：${params.id}`;
  }
}
