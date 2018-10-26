import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { DataSoreService } from './data-sore.service';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, ProfileComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [DataSoreService],
  bootstrap: [AppComponent]
})
export class AppModule {}
