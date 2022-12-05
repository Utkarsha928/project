import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {sentiment} from '../../interfaces/sentiment' ;


import { sentimentdetails } from '../../interfaces/sentimentDetails';
import { StockdetailsService } from '../../stockdetails.service';

@Component({
  selector: 'app-sentiments',
  templateUrl: './sentiments.component.html',
  styleUrls: ['./sentiments.component.css']
})
export class SentimentsComponent implements OnInit {

  Sentiment:sentiment;
  sentimentDetails:sentimentdetails[]=[];
  name:string;
  start_date:string;
  end_date:string;
  middle:string;
  start_month:string;
  middle_month:string;
  end_month:string;

  constructor(private stockService:StockdetailsService , private router : ActivatedRoute , private datepipe:DatePipe){
    let today=  new Date()
    let newtoday= new Date().setDate((today.getDate())-30)
    let middle=new Date().setDate((today.getDate())-60)
    this.end_date=datepipe.transform(newtoday,'yyyy-MM-dd')
    this.middle=datepipe.transform(middle,'yyyy-MM-dd')
    console.log(this.end_date)
    let old_day= new Date().setDate((today.getDate()) - 90)
    
    this.start_date=datepipe.transform(old_day,'yyyy-MM-dd');
    console.log(this.start_date)
    this.start_month=datepipe.transform(this.start_date,'MMMM')
    this.end_month=datepipe.transform(this.end_date,'MMMM')
    this.middle_month=datepipe.transform(this.middle,'MMMM')
  }

  ngOnInit(): void {

    this.stockService.getStockDetails(this.router.snapshot.params['stock']).subscribe((val) =>{
      this.name=val.result[0].description
    })
    this.stockService.getsentiments(this.router.snapshot.params['stock'],this.start_date,this.end_date).subscribe((res) => {
      this.Sentiment=res;
      console.log(res);


      

    })
    
    
  }



}
