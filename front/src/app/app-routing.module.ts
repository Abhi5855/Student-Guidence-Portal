import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component'
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'
import { DashhomeComponent } from './dashhome/dashhome.component';
import {TipsComponent} from './tips/tips.component';
import {TableComponent} from './table/table.component'
import { DashboardaboutComponent } from './dashboardabout/dashboardabout.component';
import { DashboardcontactComponent } from './dashboardcontact/dashboardcontact.component';
import { DashboardgalleryComponent } from './dashboardgallery/dashboardgallery.component';
import { ExploreformComponent } from './exploreform/exploreform.component';
import { EngBlogComponent } from './eng-blog/eng-blog.component';
import { DocBlogComponent } from './doc-blog/doc-blog.component';
import { CaBlogComponent } from './ca-blog/ca-blog.component';
import { GovtBlogComponent } from './govt-blog/govt-blog.component';


const routes: Routes = [

  {
    path: "", component: MainpageComponent, children: [
      { path: "", component: HomeComponent },

      { path: "about", component: AboutComponent },

      { path: "contact", component: ContactComponent },

      { path: "gallery", component: GalleryComponent },

      { path: "footer", component: FooterComponent }
    ]
  },
  { path: "sign-up", component: SignUpComponent },

  { path: "sign-in", component: SignInComponent },

  {
    path: "dashboard", canActivate: [AuthGuard], component: DashboardComponent, children: [
      {
        path:"",component:DashhomeComponent 
      },
<<<<<<< HEAD
      {path:"explore",component:ExploreformComponent},

      { path:"eng_blog",component:EngBlogComponent},

      { path:"doc_blog",component:DocBlogComponent },

      { path:"ca_blog",component:CaBlogComponent},

      { path:"govt_blog",component:GovtBlogComponent }, 

=======
      {
        path:"explore",component:ExploreformComponent
      },
>>>>>>> e2d22a4935b8e6dcf116b07e5fbfd77700b1786a
      { path: "dashboardabout", component: DashboardaboutComponent },

      { path: "dashboardcontact", component: DashboardcontactComponent },

      { path: "dashboardgallery", component: DashboardgalleryComponent },
      {
        path: "logout", component: LogoutComponent
      },
      {
        path:"tips",component:TipsComponent
      },
      {
        path:"table",component:TableComponent
      }
    ]
  }
];


//   {path:"",component:HomeComponent},
//   {path:"about",component:AboutComponent},
//   {path:"gallery",component:GalleryComponent},
//   {path:"contact",component:ContactComponent},
//   {path:"help",component:HelpComponent},
//   {path:"contact" , component:ContactComponent},
//   {path:"sign-up",component:SignUpComponent},
//   {path:"sign-in",component:SignInComponent}
//
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
