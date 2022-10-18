
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { checkMail } from "./validators/checkMail";
import { checkPassword } from "./validators/checkPassword.validator";

export function generateMyForm(FormBuild: FormBuilder, httpC : HttpClient): FormGroup {
    return FormBuild.group({
        name: ["", {

        }],

        mail: ["test@gmail.com", {

            validators: [Validators.required, Validators.email],
            asyncValidator: [checkMail.checkMailCoop(httpC)],
            updateOn: 'blur'
        }],

        password: ["", {

            validators: [Validators.required, Validators.minLength(8)]
        }],

        confirmPassword: ["", {
            validators: [Validators.required, Validators.minLength(8)]
        }]

    },
        {
            validators: [checkPassword],
            udpateOn: 'blur'
        });
};