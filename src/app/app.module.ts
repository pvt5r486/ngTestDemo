import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoService } from './demo.service';
import { Demo2Service } from './demo2.service';
import { LightSwichComponent } from './light-swich/light-swich.component';

@NgModule({
  declarations: [
    AppComponent,
    LightSwichComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DemoService, Demo2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
