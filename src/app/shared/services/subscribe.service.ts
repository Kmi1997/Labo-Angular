import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CooperativePost } from '../models/Cooperative/ICooperativePost';
import { Observable } from 'rxjs';
import { Cooperative } from '../models/Cooperative/ICooperative';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  send : boolean = false;
  baseURL: string = 'http://localhost:3000/';

 
  constructor(private httpC : HttpClient) { }

  getData() : Observable <any>{
    return this.httpC.get(this.baseURL+'cooperatives')
  }

  validate(Coop: CooperativePost) : Observable<any>{

    this.send = !this.send;
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(Coop);
    return this.httpC.post(this.baseURL+'cooperatives', body, {'headers' : headers});
  
  }

}
