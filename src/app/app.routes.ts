import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { SignUpComponent } from './pages/signUp/sign-up/sign-up.component';
import { PrivacyComponent } from './pages/privacy/privacy/privacy.component';
import { FaqComponent } from './pages/faq/faq/faq.component';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { AuthorComponent } from './pages/author/author/author.component';
import { AboutComponent } from './pages/about/about/about.component';
import { NotFoundComponent } from './pages/page-notfound/not-found/not-found.component';
import { SearchCatContentComponent } from './pages/search-cat/search-cat-content/search-cat-content.component';
import { SearchComponent } from './pages/search-cat/search/search.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path:'signUp', component:SignUpComponent},
    {path: 'search/:cat', component: SearchComponent},
    {path: 'privacy', component: PrivacyComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'author', component: AuthorComponent},
    // {path: 'event', component: EventScreenComponent},
    {path: 'about', component: AboutComponent},
    {path: '**', pathMatch:'full', component: NotFoundComponent}
];
