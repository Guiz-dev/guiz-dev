import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuiaComponent } from './guia/guia.component';
import { GuiaMeuInssComponent } from './guia-meu-inss/guia-meu-inss.component';
import { DisclaimerWhatsappModule } from './shared/disclaimer-whatsapp/disclaimer-whatsapp.module';

@NgModule({
  declarations: [
    AppComponent,
    GuiaComponent,
    GuiaMeuInssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DisclaimerWhatsappModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
