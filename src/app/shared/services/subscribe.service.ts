import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CooperativePost } from '../models/Cooperative/ICooperativePost';
import { delay, Observable, of } from 'rxjs';
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
    return this.httpC.get(this.baseURL+'cooperatives')
  };

  //Click bouton pour inscription
  validate(Coop: CooperativePost, type : string, Users: UsersPost) : Observable<any>{

    this.send = !this.send;
    
    if (type == "Utilisateur"){
      this.body = JSON.stringify(Users);
      return this.httpC.post(this.baseURL+'users', this.body, {'headers' : this.headers});
    }
    else{
      this.body = JSON.stringify(Coop);
      return this.httpC.post(this.baseURL+'cooperatives', this.body, {'headers' : this.headers});
    }
  };
}
