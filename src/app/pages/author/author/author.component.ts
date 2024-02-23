import { Component } from '@angular/core';
import { AuthorBannerComponent } from "../author-banner/author-banner.component";
import { AuthorListingsComponent } from "../author-listings/author-listings.component";
import { AuthorNewsComponent } from "../author-news/author-news.component";

@Component({
    selector: 'app-author',
    standalone: true,
    templateUrl: './author.component.html',
    styleUrl: './author.component.css',
    imports: [AuthorBannerComponent, AuthorListingsComponent, AuthorNewsComponent]
})
export class AuthorComponent {

}
