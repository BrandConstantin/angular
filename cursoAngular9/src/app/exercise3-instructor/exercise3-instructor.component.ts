import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise3-instructor',
  templateUrl: './exercise3-instructor.component.html',
  styleUrls: ['./exercise3-instructor.component.css']
})
export class Exercise3InstructorComponent implements OnInit {
  showSecret = false;
  log =  [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);    
    this.log.push(new Date());
  }

}
