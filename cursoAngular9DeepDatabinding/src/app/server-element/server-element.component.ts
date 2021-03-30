import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;

  constructor() { 
    console.log("constructor called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("changes -> " + changes);
  }

  ngOnInit() {
    console.log("ngOnInit called!");
    console.log(this.header.nativeElement.textContent);
  }

   ngDoCheck(){
     console.log("ngDoCheck called"); // caled for any changes doit in angular with ngOnChanges
   }

   ngAfterContentInit(){
     console.log("ngAfterContentInit"); // when the content charged
   }

   ngAfterContentChecked(){
     console.log("ngAfterContentCheckd"); // called after content checked
   }

   ngAfterViewChecked(){
    console.log("ngAfterViewChecked"); // called after content checked
  }
  
  ngAfterViewInit(){
    console.log("ngAfterViewInit"); // called after content checked
    console.log(this.header.nativeElement.textContent);
  }

  ngOnDestroy()  {
    console.log("distroyed!");
  }
}
