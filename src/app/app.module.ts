import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoService } from './demo.service';
import { Demo2Service } from './demo2.service';
import { LightSwichComponent } from './light-swich/light-swich.component';
import { BannerComponent } from './banner/banner.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    LightSwichComponent,
    BannerComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DemoService, Demo2Service, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
