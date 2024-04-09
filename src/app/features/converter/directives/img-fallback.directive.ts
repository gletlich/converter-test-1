import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgFallback]',
  standalone: true,
})
export class ImgFallbackDirective {
  appImgFallback = '/assets/white-flag-2.png';

  constructor(private elementRef: ElementRef) {}

  @HostListener('error')
  loadFallbackOnError() {
    const element: HTMLImageElement = <HTMLImageElement>(
      this.elementRef.nativeElement
    );
    element.src = this.appImgFallback;
  }
}
