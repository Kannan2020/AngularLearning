import { Directive, OnInit, ElementRef, Renderer2, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highLightColor = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor = this.highLightColor;
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }
  constructor(private elementRef: ElementRef, private render: Renderer2) { }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highLightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }
}
