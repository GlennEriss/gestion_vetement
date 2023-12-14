// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule
    // ... autres imports
  ],
  //bootstrap: [AppComponent]
})
export class AppModule { }
