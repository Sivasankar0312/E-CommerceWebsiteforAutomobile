import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthService } from "./shared/services/auth.service";
import { enviroment } from 'src/environments/environment.prod';
import { WelcomeComponent } from './welcome/welcome.component';

import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordPatternDirective } from './directives/password-pattern.directive';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AngularFireModule } from '@angular/fire/compat';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { FormsModule }   from '@angular/forms';
import { AddserviceComponent } from './addservice/addservice.component';
import { UploadDetailsComponent } from './upload-details/upload-details.component';
import { UploadListComponent } from './upload-list/upload-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { FeedbackdetailComponent } from './feedbackdetail/feedbackdetail.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { MechanicloginComponent } from './mechaniclogin/mechaniclogin.component';
import { AdmincComponent } from './adminc/adminc.component';
import { MechdetailComponent } from './mechdetail/mechdetail.component';
import { OrderinComponent } from './orderin/orderin.component';





@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignupComponent,
    PasswordPatternDirective,
    ContactusComponent,
    AboutusComponent,
    HomeComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    LoginComponent,
    AddserviceComponent,
    UploadDetailsComponent,
    UploadListComponent,
    OrderDetailComponent,
    FeedbackdetailComponent,
    AdminloginComponent,
    MechanicloginComponent,
    AdmincComponent,
    MechdetailComponent,
    OrderinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(enviroment.firebaseConfig),
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
