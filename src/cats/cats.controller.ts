import { Body, Controller, Get, Post } from '@nestjs/common';
import { Cat } from './cat.interface';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  // @Get()
  // findAll(@Req() request: Request): string {
  //   return 'this action will return all cats';
  // }

  //   @Post()
  //   create(): string {
  //     return 'this action will create cats lists';
  //   }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  // @Get('ab*cd')
  // getAll(): string {
  //   return 'this method returns asterisk results';
  // }

  //   @Get(':id')
  //   findOne(@Param() params: any): string {
  //     console.log(params.id);
  //     return `This action returns a #${params.id} cat`;
  //   }

  // @Get(':id')
  // findOne(@Param('id') id: string): string {
  //   return `this action returns a #${id} cat`;
  // }

  // @Post()
  // async create(@Body() CreateCatDto: CreateCatDto) {
  //   return 'this action adds a new cat';
  // }
}
