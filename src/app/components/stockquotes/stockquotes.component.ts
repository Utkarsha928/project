import { Component, Input, OnInit } from '@angular/core';
import { stockQuotes } from 'src/app/interfaces/stockQuotes';
import { stockInterface } from 'src/app/interfaces/stockinterface';

@Component({
  selector: 'app-stockquotes',
  templateUrl: './stockquotes.component.html',
  styleUrls: ['./stockquotes.component.css']
})
export class StockquotesComponent implements OnInit {
  
  
  //  @Input() stock:stockInterface;
  // @Input() names:stockNames;
  // StockD:stockQuotes;
  
  StocksList=[];
   name=[];
   quotes=[];
   symbol=[];
  
  ngOnInit(): void {
    
   
    // this.symbol=JSON.parse(localStorage.getItem('symbl'));
    // this.name=JSON.parse(localStorage.getItem('Names'));
    // this.quotes=JSON.parse(localStorage.getItem('stocks'));
  }
  
}
