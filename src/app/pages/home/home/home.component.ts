import { Component, OnInit, inject } from '@angular/core';
import { HomeBannerComponent } from "../homeBanner/home-banner/home-banner.component";
import { HomeListingComponent } from "../homeListing/home-listing/home-listing.component";
import { HomeNewsComponent } from "../homeNews/home-news/home-news.component";
import { isPlatformBrowser } from '@angular/common';
import { ElementRef, Inject, PLATFORM_ID } from '@angular/core';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HomeBannerComponent, HomeListingComponent, HomeNewsComponent]
})
export class HomeComponent implements OnInit {
    private platformId = inject(PLATFORM_ID);
    private element = inject(ElementRef);
    loader: any;
    ngOnInit() {
        this.functions()

    }

    ngAfterViewInit(): void {
        this.functions();
    
    }
    


    private functions():void {
        window.scroll({
            top:0,
            left:0,
            behavior:'smooth'
        })

        if(isPlatformBrowser(this.platformId)) {
            this.loader = (window as any).$(this.element.nativeElement).find('.preloader');

            setTimeout(() => {
                this.loader.delay(200).fadeOut(300);
                
            }, 300);
        }
    }
}
