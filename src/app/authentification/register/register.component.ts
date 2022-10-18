import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { generateMyForm } from './generateMyForm.form';
import { SubscribeService } from 'src/app/shared/services/subscribe.service';
import { CooperativePost } from 'src/app/shared/models/Cooperative/ICooperativePost';
import { Observable, Subscription } from 'rxjs';
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
  isMailExist: boolean = false;


  coop: CooperativePost = {
    name: "",
    password: "",
    type: "",
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
    private httpC : HttpClient
    ) { }

  ngOnInit(): void {

  }

  // http://localhost:3000/cooperatives?_embed=events&_expand=typeCoop

  validateForm(): void {
    this.coop = {
      name: this.subscribeForm.controls['name'].value,
      password: this.subscribeForm.controls['password'].value,
      type: "",
      mail: this.subscribeForm.controls['mail'].value,
    };
      this.subscribe.validate(this.coop, "coopérative", this.users).subscribe();
      this.send = this.subscribe.send;
  };


  debug(){
    console.log(this.subscribeForm.controls['mail'])
    console.log(this.subscribeForm.controls['mail'].hasError)
  }
};


