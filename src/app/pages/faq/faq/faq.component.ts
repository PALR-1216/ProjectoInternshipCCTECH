import { Component, OnInit } from '@angular/core';
import { FaqContentComponent } from "../faq-content/faq-content.component";
import { FaqNewsComponent } from "../faq-news/faq-news.component";

@Component({
    selector: 'app-faq',
    standalone: true,
    templateUrl: './faq.component.html',
    styleUrl: './faq.component.css',
    imports: [FaqContentComponent, FaqNewsComponent]
})




//TODO: tengo un error en la logica con el faq cuando lo undes en el footer se queda loading luego le das refresh y aparece
export class FaqComponent implements OnInit {
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
