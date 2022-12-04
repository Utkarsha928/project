import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { sentiment } from 'src/app/interfaces/sentiment';
import { sentimentdetails } from 'src/app/interfaces/sentimentDetails';
import { StockdetailsService } from 'src/app/stockdetails.service';

@Component({
  selector: 'app-sentiments',
  templateUrl: './sentiments.component.html',
  styleUrls: ['./sentiments.component.css']
})
export class SentimentsComponent implements OnInit {

  Sentiment!:sentiment;
  sentimentDetails:sentimentdetails[]=[];
  name:string;

  constructor(private stockService:StockdetailsService , private router : ActivatedRoute ){}

  ngOnInit(): void {

    // for(let sym of localStorage.getItem('symbl'))
    // this.stockService.getsentiments.subscribe(sym)
    // let symbol= this.router.snapshot.params['stock'];
    this.stockService.getStockDetails(this.router.snapshot.params['stock']).subscribe((val) =>{
      this.name=val.result[0].description
    })
    this.stockService.getsentiments(this.router.snapshot.params['stock']).subscribe((res) => {
      this.Sentiment=res;
      console.log(res);


      

    })
    
    
  }



}
