import { HttpClient } from "@angular/common/http";
import { AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { map, observable, Observable, timer } from "rxjs";
import { AbstractControl } from "@angular/forms";

export class checkMail {


    static checkMailCoop(httpC: HttpClient): AsyncValidatorFn {

        return (control: AbstractControl) => {
            console.log("ok")
            return new Promise((res, rej) => {
                res({ok : "ok"})
            })
    }
}
}
