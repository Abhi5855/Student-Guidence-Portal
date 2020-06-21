import { NgModule, ContentChildren } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HelpComponent } from './help/help.component';
import {ContactComponent} from './contact/contact.component'
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
<<<<<<< HEAD
  {path:"", canActivate:[AuthGuard] ,component:MainpageComponent,children:[
                                              {path:"",component:HomeComponent},

                                              {path:"about",component:AboutComponent},

                                              {path:"contact" , component:ContactComponent},

                                              {path:"sign-up",component:SignUpComponent},

                                              {path:"sign-in",component:SignInComponent},

  ]},
  {path:"dashboard" ,canActivate:[AuthGuard],component:DashboardComponent ,children:[
                                              {
                                                path:"logout", component:LogoutComponent
                                              }
  ]}
=======
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"gallery",component:GalleryComponent},
  {path:"contact",component:ContactComponent},
  {path:"help",component:HelpComponent},
  {path:"contact" , component:ContactComponent},
  {path:"sign-up",component:SignUpComponent},
  {path:"sign-in",component:SignInComponent}
>>>>>>> 065ded3bb91911d37263b3953cdc4a5d9eb84525
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
