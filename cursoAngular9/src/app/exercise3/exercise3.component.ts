import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrls: ['./exercise3.component.css']
})
export class Exercise3Component implements OnInit {
  showPassword = " ";
  clickButton = false;
  countClicks = 0;
  currentdate = new Date(); 
  datetime = this.currentdate.getDate() + "/"+ (this.currentdate.getMonth()+1)  + "/" 
                + this.currentdate.getFullYear() + " @ " + this.currentdate.getHours() + ":"  
                + this.currentdate.getMinutes() + ":" + this.currentdate.getSeconds();
  elementFifth = false;

  constructor(){
    this.elementFifth === false ? 'black': 'white';
  }

  changeColor(){
      return this.changeColor;
  }

  ngOnInit(): void {
  }

  showPass(){
    this.clickButton = true;
    this.countClicks += 1;

    if ( this.countClicks % 2 == 0) {
      // console.log("click even number");  
      this.showPassword = '';
    }else{
      // console.log("click odd number");
      this.showPassword = "The secret pass is TvN4 | Clicked " + this.countClicks + " | Time: " + this.datetime;    
    }
    
    if(this.countClicks === 5){
      this.elementFifth = true;
    }
  }

  getColor(){
    return this.elementFifth === true ? 'blue' : 'white';
  }
}
