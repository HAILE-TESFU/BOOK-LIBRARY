import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { bookList} from '../../Model/bookList.model';

import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {

  bookDetail:bookList[]
  subscription: Subscription;
  bookName:string;
  constructor(private service:BooksService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(){
    this.bookName = this.activatedRoute.snapshot.params['bookName'];
     this.service.getBookDetail(this.bookName);
     console.log(this.bookName,'dddddddddd')
     this.subscription = this.service.getUpdatedBookDetail().subscribe(response =>{
       console.log(response, 'dd mmmmmmmmmmmmm');
       this.bookDetail = response;
       console.log(this.bookDetail);
     })
  };

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
