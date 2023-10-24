import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs';

@Injectable()
export class TodosService {
  //todo move this to a config file or app variables
  provider = 'https://jsonplaceholder.typicode.com/';
  endpoint = 'todos';
  constructor(private http: HttpClient) { }

  //todo describe the return type by creating a model
  getTodos(): any {
    return this.http.get(`${this.provider}${this.endpoint}`)
      .pipe(
        map((items: any) => items.slice(0, 10))
      );
  }
}
