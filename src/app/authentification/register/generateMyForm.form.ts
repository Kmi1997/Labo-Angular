
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { checkMail } from "./validators/checkMail";
import { checkPassword } from "./validators/checkPassword.validator";

export function generateMyForm(FormBuild: FormBuilder, httpC : HttpClient): FormGroup {
    return FormBuild.group({
        name: ["", {
            validators: [Validators.required]
        }],

        mail: ["", {

            validators: [Validators.required, Validators.email],
            asyncValidators: [checkMail.checkMailCoop(httpC)],
            updateOn: 'blur'
        }],

        password: ["", {

            validators: [Validators.required, Validators.minLength(8)]
        }],

        confirmPassword: ["", {
            validators: [Validators.required, Validators.minLength(8)]
        }],

        choice: ["", {
            validators: [Validators.required]
        }]
    },
        {
            validators: [checkPassword],
            udpateOn: 'blur'
        });
};