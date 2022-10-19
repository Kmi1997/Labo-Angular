import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchAuthService } from '../shared/services/search-auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {


  constructor(private search : SearchAuthService, private router : Router) { }

  ngOnInit(): void {
    
    this.changeDirection()
  }

  changeDirection(){
    if(this.search.profilCoop){
      this.router.navigateByUrl("profilCoop")
    }
  }
}
