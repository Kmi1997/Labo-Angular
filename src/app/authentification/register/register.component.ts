import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { generateMyForm } from './generateMyForm.form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formsValue!: {
    name: string;
    mail: string;
    password: string;
    confirmPassword: string;
  };

  subscribeForm : FormGroup = generateMyForm(this.FormBuild)
  constructor(private FormBuild : FormBuilder, private httpC : HttpClient) { }
  
  ngOnInit(): void {
  }

}
