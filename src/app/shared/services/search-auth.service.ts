import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, find, map, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SearchAuthService {

    profilCoop : boolean = false
    profilUser : boolean = false
  
  constructor(private httpC : HttpClient) { }
  
  searchMail(value : string, type : string) : Observable<boolean>{

    return this.httpC.get(`http://localhost:3000/${encodeURIComponent(type)}?mail=${encodeURIComponent(value)}`).pipe(
    ).pipe(
        map((exists: any) => {
            console.log(exists)
            if (exists.length > 0) {
                if (type == "cooperatives"){
                    this.profilCoop = true
                }
                else{
                    this.profilUser == true
                }
                return true
            }
            else {
                return false
            }
        })
    )
}

  matchPassword(valueName : string, valueCode : string, type : string) : Observable<boolean>{
    return this.httpC.get(`http://localhost:3000/${encodeURIComponent(type)}?password=${encodeURIComponent(valueCode)}`).pipe(
    ).pipe(
        map((exists: any) => {
            console.log(encodeURI(valueCode))
            if (exists.length > 0){
                console.log(exists)
                if(find(exists => exists == encodeURIComponent(valueName)).length == 1){
                    return true
                }
                else{
                    return false
                }
            }
            else {
                console.log("Pas trouvé de correspondance")
                console.log(exists);
                return false
            }
        })
    )
  }

 
}
