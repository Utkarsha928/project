import { Component, OnInit  } from '@angular/core';


import { stockDetails } from '../../interfaces/stockDetails';

import { stockQuotes } from '../../interfaces/stockQuotes';
import { stockInterface } from '../../interfaces/stockinterface';
import { StockdetailsService } from '../../stockdetails.service';
import { symbolStock } from '../../interfaces/symbolSTock';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit{

  

  symbols:string;
  stockName:string;
  symboltype:string;
  StockData:stockQuotes[]=[];
  
  stocks :stockInterface[]=[] ;
  stockDetail:stockDetails ;
  stockquotes:stockQuotes;
  stock=[];
  StockSymbol:symbolStock[]=[];
  symstock=[];
  symbolName=[];
  namestock=[];
  allQuotes=[];

  constructor(private stockDetails :StockdetailsService , private route:ActivatedRoute, private router:Router) {}
  ngOnInit(): void {
      
    this.symstock=JSON.parse(localStorage.getItem('symbl'));
    this.namestock=JSON.parse(localStorage.getItem('Names'));
    this.allQuotes=JSON.parse(localStorage.getItem('stocks'));
    
    // this.searchStock();
    
  }

  searchStock():void{
    
    if(this.symbols === null){
      return alert('Enter Valid Input');
    }else{

    this.stockDetails.getStockDetails(this.symbols).subscribe((res) =>{
      console.log(res.result[0].description);
      this.stockName=res.result[0].description;
      this.symboltype=res.result[0].displaySymbol;
      // this.stockDetails.symbolstock(this.symboltype);
      // this.stockDetails.putsymbol();
      this.stockDetails.addsymbol(this.symboltype);
      this.symstock=JSON.parse(localStorage.getItem('symbl'));
      // this.stockDetails.symbolname(this.stockName);
      // this.stockDetails.addsymbolName();
      this.stockDetails.addsymbolName(this.stockName)
      this.namestock=JSON.parse(localStorage.getItem('Names'));
      
      this.stockDetails.getStockQuotes(res.result[0].displaySymbol).subscribe((val)=>{
        console.log(val);
      
        this.stockquotes=val;
        localStorage.setItem(this.stockName,JSON.stringify(this.stockquotes));
        // this.stockDetails.addStock(this.stockquotes);
        // this.stockDetails.putstocks();
        this.stockDetails.addstocks(this.stockquotes);
        this.allQuotes=JSON.parse(localStorage.getItem('stocks'));
        
      })
         
    })
    this.symbols=''; 
    }
  } 
  Removestock(num:number){
    this.symstock.splice(num,1);
    this.namestock.splice(num,1);
    this.allQuotes.splice(num,1);
    localStorage.setItem('symbl',JSON.stringify(this.symstock))
    localStorage.setItem('stocks',JSON.stringify(this.allQuotes))
    localStorage.setItem('Names',JSON.stringify(this.namestock))
  }



}
