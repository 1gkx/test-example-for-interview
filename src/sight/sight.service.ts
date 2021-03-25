import { Injectable } from '@nestjs/common';
import { InjectModel  } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { SightDto } from './dto/sight.dto';
import { Sight, SightDocument } from './schemas/sight.schema';

@Injectable()
export class SightService {

    constructor(@InjectModel(Sight.name) private sightModel: Model<SightDocument>) {}

    async getAll(city: string): Promise<Sight[]> {
        return this.sightModel.db.collection(city).find().toArray()
    }

    async create(SightDto: SightDto, collection: string): Promise<string> {
        return (await this.sightModel.db.collection(collection).insertOne(SightDto)).insertedId
    }
}
