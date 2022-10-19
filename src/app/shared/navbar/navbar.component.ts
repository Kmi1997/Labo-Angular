import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../services/connection.service';

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
  constructor(
    private router : Router, 
    private connection : ConnectionService
    ) { }

  ngOnInit(): void {
  }

  connect(){
    this.clicked = !this.clicked
    this.currentlyRoute = this.router.url
    this.router.navigateByUrl(this.currentlyRoute)
  }

  connectionServe(){
    this.connection.valuesConnection(this.valueName, this.valueCode)
  }
  

}
