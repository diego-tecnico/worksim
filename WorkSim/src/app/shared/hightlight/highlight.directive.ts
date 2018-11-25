import { Directive, HostListener, Input } from '@angular/core';

declare var $: any;
declare var jQuery: any;

@Directive({
  selector: '[pdgHighlight]'
})
export class HighlightDirective {

  // tslint:disable-next-line:no-input-rename
  @Input('pdgHighlight') idLabel: string;

  constructor() { }

  @HostListener('focus') onMouseEnter() {
    $('label[for=' + this.idLabel + ']').css({ color: '#3C8DBC !important' });
  }

  @HostListener('blur') onMouseLeave() {
    $('label[for=' + this.idLabel + ']').css({ color: '#505050 !important' });
  }

}
