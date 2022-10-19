import { Injectable, resolveForwardRef } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ConnectionService } from 'src/app/shared/services/connection.service';
import { SearchAuthService } from 'src/app/shared/services/search-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private connection: ConnectionService,
    private search: SearchAuthService
  ) { }

  canActivate(): boolean {

    this.getData().then((x) => {

      let existMailCoop
      if (existMailCoop) {
        if (matchPasswordCoop) {
          console.log("ok typ1")
          return true
        }
        else {
          return false
        }
      }
      else if (existMailUsers) {
        if (matchPasswordUser) {
          console.log("ok");
          return true
        }
        else {
          return false
        }
      }
      else {
        console.log("not ok")
        return false
      }
    })
  }


  async getData(): Promise<boolean> {

    return new Promise(resolve => {

      let valueName = this.connection.valueName
      let valueCode = this.connection.valueCode
      let type1 = "cooperatives"
      let type2 = "users"

      let existMailCoop: boolean = false
      this.search.searchMail(valueName, type1).subscribe(x => {
        existMailCoop = x
        console.log(existMailCoop)
      })

      let existMailUsers: boolean = false
      this.search.searchMail(valueName, type2).subscribe(x => {
        existMailUsers = x
        console.log(existMailUsers)
      })

      let matchPasswordCoop: boolean = false
      this.search.matchPassword(valueName, valueCode, type1).subscribe(x => {
        matchPasswordCoop = x
        console.log(matchPasswordCoop)
      })

      let matchPasswordUser: boolean = false
      this.search.matchPassword(valueName, valueCode, type2).subscribe(x => {
        matchPasswordUser = x
        console.log(matchPasswordUser)
      })
      resolve(true)
    })

  }
}


