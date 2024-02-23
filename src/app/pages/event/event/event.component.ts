import { Component } from '@angular/core';
import { EventRelatedComponent } from "../event-related/event-related.component";
import { EventNewsComponent } from "../event-news/event-news.component";
import { EventDetailsComponent } from "../event-details/event-details.component";
import { EventBannerComponent } from "../event-banner/event-banner.component";

@Component({
    selector: 'app-event',
    standalone: true,
    templateUrl: './event.component.html',
    styleUrl: './event.component.css',
    imports: [EventRelatedComponent, EventNewsComponent, EventDetailsComponent, EventBannerComponent]
})
export class EventComponent {

}
