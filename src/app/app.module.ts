import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuiaComponent } from './guia/guia.component';
import { GuiaMeuInssComponent } from './guia-meu-inss/guia-meu-inss.component';

@NgModule({
  declarations: [
    AppComponent,
    GuiaComponent,
    GuiaMeuInssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
