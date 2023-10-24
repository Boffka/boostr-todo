import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  //todo move this to a config file or app variables
  provider = 'https://jsonplaceholder.typicode.com/';
  endpoint = 'todos';
  constructor(private http: HttpClient) { }

  //todo describe the return type by creating a model
  getTodos() {
    return this.http.get(this.provider + this.endpoint);
  }
}
