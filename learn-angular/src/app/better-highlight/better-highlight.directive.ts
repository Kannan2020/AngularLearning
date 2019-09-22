import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  ngOnInit(): void {
    this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }
  constructor(private elementRef: ElementRef, private render: Renderer2) { }
}
