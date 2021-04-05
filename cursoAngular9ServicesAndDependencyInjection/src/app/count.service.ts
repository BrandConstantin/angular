export class CountService{
    activeToInactiveCounter = 0;
    inactiveToACtiveCounter = 0;

    incrementACtiveToInactive(){
        this.activeToInactiveCounter++;
        console.log("Act to Ina " + this.activeToInactiveCounter);
    }

    incrementInactiveToActive(){
        this.inactiveToACtiveCounter++;
        console.log("Ina to act " + this.inactiveToACtiveCounter);
    }
}