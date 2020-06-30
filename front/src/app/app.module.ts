import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LogoutComponent } from './logout/logout.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HelpComponent } from './help/help.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardheaderComponent } from './dashboardheader/dashboardheader.component';
import { DashhomeComponent } from './dashhome/dashhome.component';
import { TipsComponent } from './tips/tips.component';
import { TableComponent } from './table/table.component';
import { DashboardaboutComponent } from './dashboardabout/dashboardabout.component';
import { DashboardgalleryComponent } from './dashboardgallery/dashboardgallery.component';
import { DashboardcontactComponent } from './dashboardcontact/dashboardcontact.component';
import { ExploreformComponent } from './exploreform/exploreform.component';
import { EngBlogComponent } from './eng-blog/eng-blog.component';
import { DocBlogComponent } from './doc-blog/doc-blog.component';
import { CaBlogComponent } from './ca-blog/ca-blog.component';
import { GovtBlogComponent } from './govt-blog/govt-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SignInComponent,
    SignUpComponent,
    CardComponent,
    DashboardComponent,
    MainpageComponent,
    LogoutComponent,
    GalleryComponent,
    HelpComponent,
    FooterComponent,
    DashboardheaderComponent,
    DashhomeComponent,
    TipsComponent,
    TableComponent,
    DashboardaboutComponent,
    DashboardgalleryComponent,
    DashboardcontactComponent,
    ExploreformComponent,
    EngBlogComponent,
    DocBlogComponent,
    CaBlogComponent,
    GovtBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
