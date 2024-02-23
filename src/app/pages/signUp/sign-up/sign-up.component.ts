import { Component } from '@angular/core';
import { SignUpFormComponent } from "../sign-up-form/sign-up-form.component";
import { SignUpNewsComponent } from "../sign-up-news/sign-up-news.component";
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-sign-up',
    standalone: true,
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.css',
    imports: [SignUpFormComponent, SignUpNewsComponent, NgIf]
})
export class SignUpComponent {

}
