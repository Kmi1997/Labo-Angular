import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../shared/services/connection.service';
import { SearchAuthService } from '../shared/services/search-auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  name: string = this.connect.valueName
  code: string = this.connect.valueCode

  constructor(
    private search: SearchAuthService,
    private router: Router,
    private connect: ConnectionService) { }

  ngOnInit(): void {

  }

}
