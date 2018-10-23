import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
 quotes = [
 new Quote (0, "Carlos", "Man's not hot", "Big Shaq"),
 new Quote (0, "Sam", "Mi skuangi philosophical", "Kasyoki")
 ];

 addNewQuote(quote){
this.quotes.push(quote);
 }


  constructor() { }

  ngOnInit() {
  }

}
