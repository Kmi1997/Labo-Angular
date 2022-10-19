import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { generateMyForm } from './generateMyForm.form';
import { SubscribeService } from 'src/app/shared/services/subscribe.service';
import { CooperativePost } from 'src/app/shared/models/Cooperative/ICooperativePost';
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



  coop: CooperativePost = {
    name: "",
    password: "",
    mail: ""
  };

  users: UsersPost = {
    name: "",
    mail: "",
    password: "",
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
      this.coop = {
        name: this.subscribeForm.controls['name'].value,
        password: this.subscribeForm.controls['password'].value,
        mail: this.subscribeForm.controls['mail'].value,
      };
      this.subscribe.validate(this.coop, "cooperatives", this.users).subscribe();
    }
    else {
      this.users = {
        name: this.subscribeForm.controls['name'].value,
        mail: this.subscribeForm.controls['mail'].value,
        password: this.subscribeForm.controls['password'].value
      }
      this.subscribe.validate(this.coop, "users", this.users).subscribe();
    }

    this.send = this.subscribe.send;
  };

};


