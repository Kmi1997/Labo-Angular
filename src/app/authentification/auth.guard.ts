import { Injectable } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CanActivate, Router } from '@angular/router';
import { forkJoin, map, Observable } from 'rxjs';
import { ConnectionService } from 'src/app/shared/services/connection.service';
import { SearchAuthService } from 'src/app/shared/services/search-auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private search: SearchAuthService,
    private connect: ConnectionService,
    private router: Router
  ) { }


  canActivate() {

    if (sessionStorage.length > 0)
      return true
    else {
      return false
    }
  }


}


