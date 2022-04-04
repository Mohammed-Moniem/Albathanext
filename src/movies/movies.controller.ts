import { Controller, Get, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './interfaces/movies.interface';
import { Video } from './interfaces/video.interface';
import { Review } from './interfaces/review.interface';

@Controller('movies')
export class MoviesController {
constructor(private moviesService: MoviesService) { }

   @Get() 
   async findAll(): Promise<any>  {
        return await this.moviesService.findAll()
    }

    @Get('/search/:queryString') 
   async findSearchResult(@Param('queryString') queryString): Promise<Movie[]>  {
        return await this.moviesService.findSearchResult(queryString)
    }

    @Get('/details/:id') 
   async findDetails(@Param('id') id): Promise<Movie>  {
        return await this.moviesService.findDetails(id)
    }

    @Get('/video/:id') 
   async findVideo(@Param('id') id): Promise<Video>  {
        return await this.moviesService.findVideo(id)
    }

    @Get('/reviews/:id') 
   async findReview(@Param('id') id): Promise<Review[]>  {
        return await this.moviesService.findReview(id)
    }

}
