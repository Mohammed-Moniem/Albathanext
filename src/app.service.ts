import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';


@Injectable()
export class AppService {

constructor(private httpService: HttpService){}

  getHello(): Observable<AxiosResponse<string>> {
    
    return this.httpService.get("https://jsonplaceholder.typicode.com/users");
  }
}
