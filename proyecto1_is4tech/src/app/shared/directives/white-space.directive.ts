import { Directive, ElementRef, HostListener, Renderer2, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appWhiteSpaceDirective]'
})
export class WhiteSpaceDirective {

  @Output() textChanged = new EventEmitter<string>();

  constructor(private renderer: Renderer2) { }

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const target = event.target as HTMLTextAreaElement;

    if (target instanceof HTMLTextAreaElement) {
      const text = target.value.trimStart().trimEnd();
      this.textChanged.emit(text);
      this.renderer.setProperty(target, 'value', target.value);
    }
    
  }
}
