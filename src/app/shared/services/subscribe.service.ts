import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersPost } from '../models/Users/IUserPost';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  

  send : boolean = false;
  baseURL: string = 'http://localhost:3000/';
  body : any;
  headers = {'content-type': 'application/json'};
 
  constructor(private httpC : HttpClient) { }

  getData() : Observable <any>{
    return this.httpC.get(this.baseURL+'users')
  };

  //Click bouton pour inscription
  validate(Users: UsersPost) : Observable<any>{

    this.send = !this.send;
    
      this.body = JSON.stringify(Users);
      return this.httpC.post(this.baseURL+'users', this.body, {'headers' : this.headers});
  };
}
