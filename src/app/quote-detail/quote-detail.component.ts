import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

@Input() quote: Quote;
 @Output() isDelete = new EventEmitter<boolean>();
 @Output() isLike = new EventEmitter<boolean>();

 deleteQuote(complete: boolean) {
   this.isDelete.emit(complete);
 }
 increaseLike(votes: boolean) {
   this.isLike.emit(votes);
 }
 constructor() { }

 ngOnInit() {
 }

}
