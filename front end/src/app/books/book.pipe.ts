import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'book'
})
export class BookPipe implements PipeTransform {

  transform(value: any, bookName:string,bookAuthor:string, bookCatagory:string): any {
    if(value === undefined || bookName === '' && bookAuthor === '' &&  bookCatagory === ''){
      return value
    }
    console.log(value,';;;;')
    console.log(bookName)
    const filteredbook = value;
    //return filteredbook.filter(item =>item.name === bookName)
    return value.filter(item =>(item.bookName.toLowerCase().indexOf(bookName.toLowerCase())>-1 && item.bookAuthor.toLowerCase().indexOf(bookAuthor.toLowerCase())>-1) && item.bookCatagory.toLowerCase().indexOf(bookCatagory.toLowerCase())>-1)
  }

}
