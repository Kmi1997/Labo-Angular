import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ConnectionService } from './connection.service';

@Injectable({
    providedIn: 'root'
})
export class SearchAuthService {

    baseURL: string = 'http://localhost:3000/users'

    constructor(private httpC: HttpClient, private connect: ConnectionService) { }



    identification(mail: string, code: string) : Observable<boolean>{

        return this.httpC.get(this.baseURL + `?mail=${mail}`).pipe(
            map((array : any) => {
                if (array.length > 0 && array[0].password == code){
                    console.log("ok")
                    sessionStorage.setItem('name', array[0].name )
                    sessionStorage.setItem('password', array[0].password)
                    sessionStorage.setItem('type', array[0].typeCoopId)
                    return true
                }
                else{
                    console.log("not ok");
                    return false
                }
            })
        )
    }

    getData(mail : string) : Observable<boolean>{
        return this.httpC.get(this.baseURL + `?mail=${mail}`).pipe(
            map((array : any) => {
                console.log(array[0].typeCoopId);
                
               if(array[0].typeCoopId == null){
                return false
               }
               else{
                return true
               }
            })
        )
    }

}
