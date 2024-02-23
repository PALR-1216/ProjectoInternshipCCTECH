import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { TopButtonComponent } from "./shared/top-button/top-button.component";
import { HomeComponent } from "./pages/home/home/home.component";
import { AboutComponent } from "./pages/about/about/about.component";
import { ContactComponent } from "./pages/contact/contact/contact.component";
import { NotFoundComponent } from "./pages/page-notfound/not-found/not-found.component";
import { AuthorComponent } from "./pages/author/author/author.component";
import { SearchComponent } from "./pages/search-cat/search/search.component";
import { PrivacyComponent } from "./pages/privacy/privacy/privacy.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, TopButtonComponent, HomeComponent, AboutComponent, ContactComponent, NotFoundComponent, AuthorComponent, SearchComponent, PrivacyComponent]
})
export class AppComponent {
  title = 'projecto_cctech';
}
