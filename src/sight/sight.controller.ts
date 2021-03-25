import { Body, Param, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SightDto } from './dto/sight.dto';
import { SightService } from './sight.service';

@Controller('/')
export class SightController {
    constructor(private readonly SightService: SightService) {

    }

    @Get(':city/sights')
    getAll(@Param('city') city: string) {
        return this.SightService.getAll(city)
    }

    @Post(':city')
    @HttpCode(HttpStatus.CREATED)
    create(
        @Param('city') city: string,
        @Body() SightDto: SightDto
    ) {
        return this.SightService.create(SightDto, city)
    }
}
