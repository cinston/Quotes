export class Quote {
like: number;
dislike: number;
public showQuote: boolean;
  constructor (
  public id: number,
  public author: string,
  public quote: string,
  public post: string,
  ){
  this.showQuote=false;
  this.like=0;
  this.dislike=0;
  }
}
