import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { StocksComponent } from './components/stocks/stocks.component';
import { StockquotesComponent } from './components/stockquotes/stockquotes.component';
import { SentimentsComponent } from './components/sentiments/sentiments.component';



@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    StockquotesComponent,
    SentimentsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
