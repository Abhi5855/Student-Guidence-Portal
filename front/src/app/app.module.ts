import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
<<<<<<< HEAD
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CardComponent } from './card/card.component';
import { HttpClient} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LogoutComponent } from './logout/logout.component';
=======
import { GalleryComponent } from './gallery/gallery.component';
import { HelpComponent } from './help/help.component';
>>>>>>> 065ded3bb91911d37263b3953cdc4a5d9eb84525

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
<<<<<<< HEAD
    SignInComponent,
    SignUpComponent,
    CardComponent,
    DashboardComponent,
    MainpageComponent,
    LogoutComponent
=======
    GalleryComponent,
    HelpComponent
>>>>>>> 065ded3bb91911d37263b3953cdc4a5d9eb84525
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
