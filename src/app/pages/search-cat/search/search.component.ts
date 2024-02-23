import { Component } from '@angular/core';
import { SearchCatContentComponent } from "../search-cat-content/search-cat-content.component";
import { SearchCatNewsComponent } from "../search-cat-news/search-cat-news.component";

@Component({
    selector: 'app-search',
    standalone: true,
    templateUrl: './search.component.html',
    styleUrl: './search.component.css',
    imports: [SearchCatContentComponent, SearchCatNewsComponent]
})
export class SearchComponent {

}
