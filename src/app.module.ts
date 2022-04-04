import { Module } from '@nestjs/common';
import {HttpModule} from '@nestjs/axios'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [HttpModule, MoviesModule, ConfigModule.forRoot({
  isGlobal: true, 
})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
