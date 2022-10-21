import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MinValidator } from '@angular/forms';
import { find, forkJoin, last, lastValueFrom, map, Observable, of, Subject, Subscription } from 'rxjs';
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

    // searchMail(value: string, type: string): Observable<boolean> {

    //     return this.httpC.get(`http://localhost:3000/${encodeURIComponent(type)}?mail=${encodeURIComponent(value)}`)
    //         .pipe(
    //             map((exists: any) => {
    //                 console.log(exists)
    //                 console.log(exists.length);

    //                 if (exists.length > 0) {
    //                     // this.profilName = exists[0].name
    //                     if (type == "cooperatives") {
    //                         this.profilCoop = true
    //                     }
    //                     else {
    //                         this.profilUser = true
    //                     }
    //                     return true
    //                 }
    //                 else {
    //                     return false
    //                 }
    //             })
    //         )
    // }

    // matchPassword(valueName: string, valueCode: string, type: string): Observable<boolean> {
    //     return this.httpC.get(`http://localhost:3000/${encodeURIComponent(type)}?password=${encodeURIComponent(valueCode)}`).pipe(
    //         map((exists: any) => {
    //             console.log(encodeURI(valueCode))
    //             if (exists.length > 0) {
    //                 console.log(exists)
    //                 if (find(exists => exists == encodeURIComponent(valueName)).length == 1) {
    //                     return true
    //                 }
    //                 else {
    //                     return false
    //                 }
    //             }
    //             else {
    //                 console.log("Pas trouvé de correspondance")
    //                 console.log(exists);
    //                 return false
    //             }
    //         })
    //     )
    // }


}
    //


    // this.codeCoop = this.matchPassword(this.connect.valueName, this.connect.valueCode, this.type1)
    // this.codeUser = this.matchPassword(this.connect.valueName, this.connect.valueCode, this.type2)



// 