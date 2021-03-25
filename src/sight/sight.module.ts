import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Sight, SightSchema } from './schemas/sight.schema';
import { SightController } from './sight.controller';
import { SightService } from './sight.service';

@Module({
    providers: [ SightService ],
    controllers: [ SightController ],
    imports: [
        MongooseModule.forFeature([{
            name: Sight.name,
            schema: SightSchema
        }])
    ]
})
export class SightModule {}
