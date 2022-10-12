import { Event } from "../Event/IEvent";
import { Cooperative } from "./ICooperative";

export class CooperativeClass implements Cooperative{
    
    id: number;
    name: string;
    type: string;
    mail: string;
    password: string;
    event: Event [];

    constructor(id: number, name: string, type: string, mail: string, password: string, event: Event[]){

        this.id = id;
        this.name = name;
        this.type = type;
        this.mail = mail;
        this.password = password
        this.event = event;

    }
    
}
