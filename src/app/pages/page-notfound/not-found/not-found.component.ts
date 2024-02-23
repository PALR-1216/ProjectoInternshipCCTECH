import { Component } from '@angular/core';
import { NotFoundBannerComponent } from "../not-found-banner/not-found-banner.component";
import { NotFoundNewsComponent } from "../not-found-news/not-found-news.component";

@Component({
    selector: 'app-not-found',
    standalone: true,
    templateUrl: './not-found.component.html',
    styleUrl: './not-found.component.css',
    imports: [NotFoundBannerComponent, NotFoundNewsComponent]
})
export class NotFoundComponent {

}
