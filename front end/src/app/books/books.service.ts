import { Injectable, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import {bookList} from '../Model/bookList.model';
import { bookDetail } from '../Model/bookDetail.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private bookList:bookList[];
  private bookDetail:bookList[];
  private updatedBookList= new Subject<bookList[]>();
  private updatedBookDetail= new Subject<bookList[]>();

  //bookDetail:bookDetail;

  constructor(private http:HttpClient) { }

  getAllBooks(){
    this.http.get<bookList[]>('http://localhost:3000/book/api/book-list').subscribe(response =>{
      console.log(response)
      this.bookList = response;
      this.updatedBookList.next([...this.bookList])
    })
  }

  getBookDetail(bookName:string){
    this.http.get<bookList[]>(`http://localhost:3000/book/api/book-detail/${bookName}`).subscribe(responseDetail=>{
      console.log(responseDetail,'sss')
      this.bookDetail = responseDetail;
      this.updatedBookDetail.next([...this.bookDetail]);
    })
  };

getUpdatedBookList(){
  return this.updatedBookList.asObservable();
}
getUpdatedBookDetail(){
  return this.updatedBookDetail.asObservable();
}
}
