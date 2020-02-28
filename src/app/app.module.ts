import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputContainerModule } from './input-container/input-container.module';
import { FactPageModule } from './fact-page/fact-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputContainerModule,
    FactPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
