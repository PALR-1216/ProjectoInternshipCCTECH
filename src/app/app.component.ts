import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { TopButtonComponent } from "./shared/top-button/top-button.component";
import { HomeComponent } from "./pages/home/home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, TopButtonComponent, HomeComponent]
})
export class AppComponent {
  title = 'projecto_cctech';
}
