import { Component } from '@angular/core';
import { AboutBannerComponent } from "../about-banner/about-banner.component";
import { AboutHowitWorksComponent } from "../about-howit-works/about-howit-works.component";
import { AboutTeamsComponent } from "../about-teams/about-teams.component";
import { AboutBlogsComponent } from "../about-blogs/about-blogs.component";
import { AboutNewsComponent } from "../about-news/about-news.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [AboutBannerComponent, AboutHowitWorksComponent, AboutTeamsComponent, AboutBlogsComponent, AboutNewsComponent]
})
export class AboutComponent {

}
