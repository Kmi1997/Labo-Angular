import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../services/connection.service';
import { SearchAuthService } from '../services/search-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

})
export class NavbarComponent implements OnInit {

  clicked : boolean = false
  currentlyRoute : string = ""


  valueName : string = ""
  valueCode : string = ""


  okToConnection : boolean = true

  constructor(
    private router : Router, 
    private connection : ConnectionService,
    private search : SearchAuthService
    ) { }

  ngOnInit(): void {
    
  }
  
  
  connect(){
    this.clicked = !this.clicked
    this.currentlyRoute = this.router.url
    this.router.navigateByUrl(this.currentlyRoute)
    console.log(this.currentlyRoute);
  }

  connectionServe(){
    this.connection.valuesConnection(this.valueName, this.valueCode)
    this.search.identification(this.connection.valueName, this.connection.valueCode).subscribe(response => {
      if (response){
        this.search.getData(this.connection.valueName).subscribe({
          next: x => {
            if(x){
            this.router.navigateByUrl("auth/profil/profilCoop")
          }
          else{
            this.router.navigateByUrl("auth/profil/profilUser")
          }
        },
          error : err => console.log(err),
          complete : () => console.log("terminé")
      })
      }
      else{
        this.okToConnection = false
      }
    })
  }
}
