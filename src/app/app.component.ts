import { Component } from '@angular/core';
// import { stockDetails } from './interfaces/stockDetails';
// import { stockQuotes } from './interfaces/stockQuotes';

import {StockdetailsService} from './stockdetails.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[StockdetailsService]
})
export class AppComponent {
  title = 'project';
  symbols : string;
  
  // stockName='';
  // symboltype:string;

  // stockDetail:stockDetails ;
  // stockquotes:stockQuotes;
  
  constructor(private stockDetails :StockdetailsService) {}
  
  
}
