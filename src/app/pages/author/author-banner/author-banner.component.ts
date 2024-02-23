import { Component, ElementRef, Inject, Input, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-author-banner',
  standalone: true,
  imports: [],
  templateUrl: './author-banner.component.html',
  styleUrl: './author-banner.component.css'
})
export class AuthorBannerComponent {

  private platformId = inject(PLATFORM_ID);
  private element = inject(ElementRef);
  counter: any

  ngOnInit(): void {


  }

  ngAfterViewInit(): void {

    this.functions();
  }

  private functions() {

    if (isPlatformBrowser(this.platformId)) { // due to server side rendering check if browser

      this.counter = (window as any).$(this.element.nativeElement)
        .find('.count');


      this.counter.each(function (this: any) {
        (window as any).$(this).prop('Counter', 0).animate({
          Counter: (window as any).$(this).text()
        }, {
          duration: 1700,
          easing: 'swing',
          step: function (now: number) {
            (window as any).$(this).text(Math.ceil(now));
          }
        });
      });
    }
  }
}
