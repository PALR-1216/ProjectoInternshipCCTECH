import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-author-listings',
  standalone: true,
  imports: [],
  templateUrl: './author-listings.component.html',
  styleUrl: './author-listings.component.css'
})
export class AuthorListingsComponent {
  @Input() Author: any

}
