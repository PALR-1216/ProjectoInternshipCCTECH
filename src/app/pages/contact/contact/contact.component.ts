import { Component } from '@angular/core';
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { ContactNewsComponent } from "../contact-news/contact-news.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    imports: [ContactFormComponent, ContactNewsComponent]
})
export class ContactComponent {
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
