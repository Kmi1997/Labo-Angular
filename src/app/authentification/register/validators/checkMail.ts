import { HttpClient } from "@angular/common/http";
import { AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { delay, map } from "rxjs";
import { AbstractControl } from "@angular/forms";

export class checkMail {


    static checkMailCoop(httpC: HttpClient): AsyncValidatorFn {

        return (control: AbstractControl) => {
            return httpC.get(`http://localhost:3000/cooperatives?mail=${encodeURI(control.value)}`).pipe(
                delay(1000)
            ).pipe(
                map((exists: any) => {
                    console.log(exists)
                    if (exists.length > 0) {
                        return { emailExists: true }
                    }
                    else {
                        console.log("ok")
                        return null
                    }
                })
            )
        }
    }


    static checkMailUsers(httpC: HttpClient): AsyncValidatorFn {

        return (control: AbstractControl) => {
            return httpC.get(`http://localhost:3000/users?mail=${encodeURI(control.value)}`).pipe(
                delay(1000)
            ).pipe(
                map((exists: any) => {
                    console.log(exists)
                    if (exists.length > 0) {
                        return { emailExistsUsers: true }
                    }
                    else {
                        console.log("ok")
                        return null
                    }
                })
            )
        }
    }


}

