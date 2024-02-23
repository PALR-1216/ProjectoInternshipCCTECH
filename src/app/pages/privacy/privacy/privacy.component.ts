import { Component } from '@angular/core';
import { PrivacyContentComponent } from "../privacy-content/privacy-content.component";
import { PrivacyNewsComponent } from "../privacy-news/privacy-news.component";

@Component({
    selector: 'app-privacy',
    standalone: true,
    templateUrl: './privacy.component.html',
    styleUrl: './privacy.component.css',
    imports: [PrivacyContentComponent, PrivacyNewsComponent]
})
export class PrivacyComponent  {
  ngOnInit(): void {
    
    this.toTop()
  }

  ngAfterViewInit(): void {
    
    this.toTop()
}

  private toTop(){
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
}
