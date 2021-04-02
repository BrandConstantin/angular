import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlightDirective]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'trasparent';

  constructor(private elRef: ElementRef, private render: Renderer2) { }

  ngOnInit(){
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
  
  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
  //   this.render.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }
}
