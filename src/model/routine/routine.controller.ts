import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { RoutineService } from './routine.service';
import { CreateRoutineDto } from './dto/create-routine.dto';
import { UpdateRoutineDto } from './dto/update-routine.dto';

@Controller('routine')
export class RoutineController {
  constructor(private readonly routineService: RoutineService) {}

  @Post()
  create(@Body() createRoutineDto: CreateRoutineDto) {
    return this.routineService.create(createRoutineDto);
  }

  @Get()
  findAll() {
    return this.routineService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateRoutineDto: UpdateRoutineDto) {
    return this.routineService.update(+id, updateRoutineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.routineService.remove(+id);
  }
}
