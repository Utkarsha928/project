import { EventEmitter, Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http' ;
import { concatMap, Observable, Subject, tap } from 'rxjs';
import { stockDetails } from './interfaces/stockDetails';
import { stockQuotes } from './interfaces/stockQuotes';
import { sentiment } from './interfaces/sentiment';
import { symbolStock } from './interfaces/symbolSTock';




@Injectable({
  providedIn: 'root'
})
export class StockdetailsService {

  StockData:stockQuotes[]=[];
  StockSymbol:symbolStock[]=[];
  symbolName=[];
  

  constructor( private http:HttpClient) { 
    
  }

  

  getStockDetails(symbols:string){
    return this.http.get<stockDetails>(`https://finnhub.io/api/v1/search?q=${symbols}&token=bu4f8kn48v6uehqi3cqg`

    /**{
      headers:this.httpOptions.headers
    }*/
    
    );
    
    }
  
  getStockQuotes(symbol:string){
    return this.http.get<stockQuotes>(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=bu4f8kn48v6uehqi3cqg`)
  }

  getsentiments(sym,start_date,end_date){
    return this.http.get<sentiment>(`https://finnhub.io/api/v1/stock/insider-sentiment?symbol=${sym}&from=${start_date}&to=${end_date}&token=bu4f8kn48v6uehqi3cqg`)
  }
  
  addStock(object){
  
    this.StockData.push(object)
  }
  putstocks(){
    for(let stock of this.StockData){
      localStorage.setItem('stocks',JSON.stringify(this.StockData))
    }
  }
  
  symbolstock(sym){
    
    this.StockSymbol.push(sym)
  }
  putsymbol(){
    
    for(let symbl of this.StockSymbol ){
      localStorage.setItem('symbl' , JSON.stringify(this.StockSymbol))
    
  }
  }
  symbolname(sym){
    this.symbolName.push(sym)
  }
  
  addsymbolName(){
    
    for(let name of this.symbolName){
      localStorage.setItem('Names', JSON.stringify(this.symbolName))
    }
  }

} 

