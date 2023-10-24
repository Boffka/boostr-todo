import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //todo move this to a config file or app variables
  provider = 'https://jsonplaceholder.typicode.com/';
  endpoint = 'users';

  constructor(private http: HttpClient) {
  }

  //todo describe the return type by creating a model
  //todo describe the type of the parameter. Possible values are: 'admin', 'super-admin', 'support-admin', 'default'
  getUsers(type) {
    console.log('User type: ', type);
    return this.http.get(this.provider + this.endpoint);
  }
}
