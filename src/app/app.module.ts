import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchService } from './search.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';

const router: Routes = [
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "signUp", component: SignUpComponent },
  { path: "", component: LoginComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(router)
  ],
  exports: [
    RouterModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
