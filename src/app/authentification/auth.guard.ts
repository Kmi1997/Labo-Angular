import { Injectable } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ActivatedRoute, CanActivate, Router } from '@angular/router';
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
    private router: Router,
    private active: ActivatedRoute
  ) { }


  canActivate() {

    if (sessionStorage.length > 0){
     return true
    }
    else {
      return false
    }
  }


}


