import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from "./app.controller";
import { SightModule } from './sight/sight.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    SightModule, 
    AuthModule,
    MongooseModule.forRoot('mongodb+srv://testikov:1q2w3e@cluster0.fnzss.mongodb.net/interview?retryWrites=true&w=majority')
  ],
  controllers: [ AppController ],
  providers: [],
})
export class AppModule {}
