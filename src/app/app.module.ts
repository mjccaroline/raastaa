import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { Routes,RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { EventsComponent } from './events/events.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const appRouts:Routes=[
  {path:'',component:HomeComponent},
  {path:'articles',component:ArticlesComponent},
  {path:'events',component:EventsComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ArticlesComponent,
    EventsComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouts)
  ],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent]
})
export class AppModule { }
