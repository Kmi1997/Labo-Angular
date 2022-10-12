import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { checkPassword } from "./validators/checkPassword.validator";

export function generateMyForm(FormBuild: FormBuilder): FormGroup {
    return FormBuild.group({
        name: ["", {

        }],

        mail: ["", {

            validators: [Validators.required, Validators.email],
            updateOn: ''
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