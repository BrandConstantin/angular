import { Injectable } from "@angular/core";
import { CountService } from "./count.service";

@Injectable()
export class UsersService{
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Robert'];

    constructor(private counterSErvice: CountService){}

    setToActive(id: number){
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterSErvice.incrementACtiveToInactive;
    }

    setToInactive(id: number){
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterSErvice.incrementInactiveToActive;
    }
}