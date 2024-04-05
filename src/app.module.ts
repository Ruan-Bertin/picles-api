import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShelterModule } from './shelter/shelter.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ShelterModule, MongooseModule.forRoot('mongodb+srv://RuanBertin:Mugiwara2807@piclescluster.1n40fit.mongodb.net/picles?retryWrites=true&w=majority&appName=PiclesCluster')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
