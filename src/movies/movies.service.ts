import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
import { Movie } from './interfaces/movies.interface';
import { Video } from './interfaces/video.interface';
import { Review } from './interfaces/review.interface';


@Injectable()
export class MoviesService {
    constructor(private configService: ConfigService) { }
    private apiKey = this.configService.get<string>('API_KEY_QUERY');
    private baseUrl = this.configService.get<string>('BASE_URL');

    async findAll(): Promise<any> {
        try {
            const res = await axios.get(`${this.baseUrl}/discover/movie?${this.apiKey}`);
            let returnedData: Movie[] = []; 
            returnedData = [...res.data.results.slice(0, 10)];
            return {results: returnedData};
        } catch (error) {
            console.log(error)
        }
    }

    async findSearchResult(queryString: string): Promise<Movie[]> {
        try {
            const res = await axios.get(`${this.baseUrl}/search/movie?${this.apiKey}&query=${queryString}`)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }

    async findDetails(id): Promise<Movie> {
        try {
            const res = await axios.get(`${this.baseUrl}/movie/${id}?${this.apiKey}`)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }

    async findVideo(id): Promise<Video> {
        try {
            const res = await axios.get(`${this.baseUrl}/movie/${id}/videos?${this.apiKey}`)
            return res.data.results[0]
        } catch (error) {
            console.log(error)
        }
    }

    async findReview(id): Promise<Review[]> {
        try {
            const res = await axios.get(`${this.baseUrl}/movie/${id}/reviews?${this.apiKey}`)
            return res.data.results
        } catch (error) {
            console.log(error)
        }
    }

}
