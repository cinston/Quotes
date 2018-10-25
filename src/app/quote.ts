export class Quote {

public showQuote: boolean;
public like: number;
public dislike: number;
  constructor (
  public id: number,
  public author: string,
  public quote: string,
  public post: string,
  ){
  this.showQuote=true;
  this.like = 0;
  this.dislike = 0;

  }
}
