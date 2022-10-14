import { Event } from '../Event/IEvent'

export interface CooperativePost { 

    name: string;
    type: string;
    mail: string;
    password: string;
    event: Event[];
    
}