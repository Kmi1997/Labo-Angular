import { Component, OnInit, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../services/connection.service';
import { SearchAuthService } from '../services/search-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

})
export class NavbarComponent implements OnInit {

  clicked: boolean = false
  currentlyRoute: string = ""
  session: number = sessionStorage.length
  id : string | null = sessionStorage.getItem('id')

  valueName: string = ""
  valueCode: string = ""


  okToConnection: boolean = true

  constructor(
    private router: Router,
    private connection: ConnectionService,
    private search: SearchAuthService
  ) { }

  ngOnInit(): void {

  }


  connect() {
    this.clicked = !this.clicked
    this.currentlyRoute = this.router.url
    this.router.navigateByUrl(this.currentlyRoute)
    console.log(this.currentlyRoute);
  }

  connectionServe() {
    this.connection.valuesConnection(this.valueName, this.valueCode)
    this.search.identification(this.connection.valueName, this.connection.valueCode).subscribe(response => {
      if (response) {
        this.search.getData(this.connection.valueName).subscribe({
          next: x => {
            this.router.navigateByUrl(`auth/profil/${this.id}`)
            console.log(this.id);
            
            this.clicked = false
            this.session = sessionStorage.length
            this.okToConnection = true
          },
          error: err => console.log(err),
          complete: () => console.log("terminé")
        })
      }
      else {
        this.okToConnection = false
      }
    })
  }

  logout() {
    sessionStorage.clear();
    this.session = 0
    this.valueCode = ""
  }
}
