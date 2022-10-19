import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  valueName : string = ""
  valueCode : string = ""

  constructor() { }

  valuesConnection(name : string, code : string){
    this.valueName = name
    this.valueCode = code
    
  }
}
