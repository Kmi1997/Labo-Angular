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

  type : string | null = sessionStorage.getItem('type')
  name: string | null = sessionStorage.getItem('name')
  welcome : string = "Bienvenue au personnel de "
  hello : string = "Bonjour, "

  constructor() { }

  ngOnInit(): void {
  }

}
