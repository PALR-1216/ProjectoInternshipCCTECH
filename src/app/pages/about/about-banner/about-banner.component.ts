
import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, inject } from '@angular/core';


@Component({
  selector: 'app-about-banner',
  standalone: true,
  imports: [],
  templateUrl: './about-banner.component.html',
  styleUrl: './about-banner.component.css'
})
export class AboutBannerComponent  implements OnInit{
  private platformId = inject(PLATFORM_ID);
  private element = inject(ElementRef);
  counter: any
  ngOnInit() {
    this.functions();
  }

  ngAfterViewInit(): void {
    
    this.functions();
}

  private functions() {

    if(isPlatformBrowser(this.platformId)) {
      this.counter = (window as any).$(this.element.nativeElement).find('.count');

      this.counter.each(function ( this: any) {
        (window as any).$(this).prop('Counter',0).animate({
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
