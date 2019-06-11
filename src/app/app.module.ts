import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoService } from './demo.service';
import { Demo2Service } from './demo2.service';
import { LightSwichComponent } from './light-swich/light-swich.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    LightSwichComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DemoService, Demo2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
