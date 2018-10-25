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
 new Quote (0, "DIANA", "Life is too short to die young ", "Mutheu")
 ];

 addNewQuote(quote){
this.quotes.push(quote);
 }

 deleteQuote(isComplete, index){
 if (isComplete){
 let toDelete=confirm('Are you sure u want to delete ${this.quotes[index.name]}')

 if(toDelete){
 this.quotes.splice(index, 1)
 }
 }
 }
 addVote(vote,index){
  if(vote){
    this.quotes[index].like += 1;
    
  } else {
    this.quotes[index].dislike += 1;
  }
}


  constructor() { }

  ngOnInit() {
  }

 
}
