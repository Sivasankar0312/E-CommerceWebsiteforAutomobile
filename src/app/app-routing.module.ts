import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { AddserviceComponent } from './addservice/addservice.component';
import { UploadListComponent } from './upload-list/upload-list.component';
import { UploadDetailsComponent } from './upload-details/upload-details.component';

import { OrderDetailComponent } from './order-detail/order-detail.component';

import { FeedbackdetailComponent } from './feedbackdetail/feedbackdetail.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { MechanicloginComponent } from './mechaniclogin/mechaniclogin.component';
import { AdmincComponent } from './adminc/adminc.component';
import { MechdetailComponent } from './mechdetail/mechdetail.component';
import { OrderinComponent } from './orderin/orderin.component';

const routes: Routes = [

  {path:'welcome',component:WelcomeComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'verify-email',component:VerifyEmailComponent},
  {path:"",redirectTo:'welcome',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"home",component:HomeComponent,canActivate: [AuthGuard]},
  {path:"add-service",component:AddserviceComponent},
  {path:'uplist',component:UploadListComponent},
  {path:'updetail',component:UploadDetailsComponent},
  {path:"order",component:OrderDetailComponent},
  {path:"feedback",component:FeedbackdetailComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"mechanic",component:MechanicloginComponent},
  {path:"adminc",component:AdmincComponent,canActivate:[AuthGuard]},
  {path:"mechdetail",component:MechdetailComponent},
  {path:"orderin",component:OrderinComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }