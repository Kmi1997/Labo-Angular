import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { generateMyForm } from './generateMyForm.form';
import { SubscribeService } from 'src/app/shared/services/subscribe.service';
import { UsersPost } from 'src/app/shared/models/Users/IUserPost';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  subscribeForm: FormGroup = generateMyForm(this.FormBuild, this.httpC)
  send: boolean = false;


  Users: UsersPost = {
    name: "",
    mail: "",
    password: "",
    typeCoopId : null
  }

  constructor(
    private FormBuild: FormBuilder,
    private subscribe: SubscribeService,
    private httpC: HttpClient
  ) { }

  ngOnInit(): void {

  }

  // http://localhost:3000/cooperatives?_embed=events&_expand=typeCoop

  validateForm(): void {

    if (this.subscribeForm.controls['choice'].value == "coop") {
      this.Users = {
        name: this.subscribeForm.controls['name'].value,
        password: this.subscribeForm.controls['password'].value,
        mail: this.subscribeForm.controls['mail'].value,
        typeCoopId: 5
      };
      this.subscribe.validate(this.Users).subscribe();
    }
    else {
      this.Users = {
        name: this.subscribeForm.controls['name'].value,
        mail: this.subscribeForm.controls['mail'].value,
        password: this.subscribeForm.controls['password'].value,
        typeCoopId : null
      }
      this.subscribe.validate(this.Users).subscribe();
    }

    this.send = this.subscribe.send;
  };

};


