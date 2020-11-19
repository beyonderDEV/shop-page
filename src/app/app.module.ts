import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";


import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PipesModule } from "./pipes/pipes.module"
import { AccordionModule  } from "./accordion/accordion.module"

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    PipesModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
