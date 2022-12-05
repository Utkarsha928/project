import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { StocksComponent } from './components/stocks/stocks.component';

import { SentimentsComponent } from './components/sentiments/sentiments.component';
import { DatePipe } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    
    SentimentsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
