import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { Subscription } from 'rxjs';

import { bookList } from '../../Model/bookList.model';
import { BooksService} from '../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers:[]
})
export class BookListComponent implements OnInit, OnDestroy {
  constructor(private service:BooksService, private router:Router ) {}

  bookName = "";
  bookAuthor="";
  bookCatagory="";

  bookLists:bookList[];
  sunscription:Subscription;

  ngOnInit(){
   //this.bookLists = this.service.bookList;
   this.service.getAllBooks();
  this.sunscription = this.service.getUpdatedBookList().subscribe(response =>{
     this.bookLists = response;
   })
  };

  ngOnDestroy(){
    this.sunscription.unsubscribe();
  };

  viewDetail(bookName:string){
    this.router.navigate([`/book-details/${bookName}`])
  }
}
