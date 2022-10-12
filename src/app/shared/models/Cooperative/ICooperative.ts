import { Event } from '../Event/IEvent'

export interface Cooperative {
    id: number;
    name: string;
    type: string;
    mail: string;
    password: string;
    event: Event[]
}