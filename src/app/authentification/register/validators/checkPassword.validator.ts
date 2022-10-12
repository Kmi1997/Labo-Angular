import { AbstractControl, ValidationErrors } from "@angular/forms";

export function checkPassword(controlGroup : AbstractControl) {
    let error : ValidationErrors | null  = null;

    if (controlGroup.value["password"] && controlGroup.value["confirmPassword"]){

        if (controlGroup.value["password"] != controlGroup.value["confirmPassword"]){
            error = { checkPassword : "Les deux mots de passe ne correspondent pas"}
        } 
    }

    return error;
}