import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { generateMyForm } from './generateMyForm.form';
import { SubscribeService } from 'src/app/shared/services/subscribe.service';
import { CooperativePost } from 'src/app/shared/models/Cooperative/ICooperativePost';
import { find, map, Observable, Subscription } from 'rxjs';
import { Cooperative } from 'src/app/shared/models/Cooperative/ICooperative';
import { CooperativeClass } from 'src/app/shared/models/Cooperative/CooperativeClass';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  subscribeForm: FormGroup = generateMyForm(this.FormBuild)
  send: boolean = false;
  isMailExist: boolean = false;
  mailFinded: string = "";
  realCoop: Cooperative | null = null;

  coop: CooperativePost = {
    name: "",
    password: "",
    type: "",
    mail: "",
    event: []
  };

  constructor(private FormBuild: FormBuilder, private subscribe: SubscribeService) { }

  ngOnInit(): void {

  }

  // http://localhost:3000/cooperatives?_embed=events&_expand=typeCoop

  validateForm(): void {
    this.coop = {
      name: this.subscribeForm.controls['name'].value,
      password: this.subscribeForm.controls['password'].value,
      type: "",
      mail: this.subscribeForm.controls['mail'].value,
      event: []
    };
    this.subscribe.validate(this.coop).subscribe();
    this.send = this.subscribe.send;
    this.addCoop();
  };

  addCoop(): void {
    if (this.send) {
      this.subscribe.getData().subscribe(x => {
        this.realCoop = new CooperativeClass(x.id, x.name, x.type, x.mail, x.password, x.event);
        console.log(this.realCoop)
      });
    };
  }

};


