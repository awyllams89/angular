import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataFormComponent } from './data-form/data-form.component';
import { TemplateFormModule } from './template-form/template-form.module';
import { CepService } from './service/cep.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent
  ],
  imports: [
    BrowserModule,
    TemplateFormModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
