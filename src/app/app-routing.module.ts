import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SentimentsComponent } from './components/sentiments/sentiments.component';
import { StockquotesComponent } from './components/stockquotes/stockquotes.component';
import { StocksComponent } from './components/stocks/stocks.component';

const routes: Routes = [
  {path : '', component : StocksComponent},
  {path:'sentiment/:stock',component: SentimentsComponent}

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
