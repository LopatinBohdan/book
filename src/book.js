export class Book{
   constructor(title, author, genre, pages, reviews=[] ){
    this.title=title;
    this.author=author;
    this.genre=genre;
    this.pages=pages;
    this.reviews=reviews;
   }
}