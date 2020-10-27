import { async, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';





import { BookListComponent } from './book-list.component';
import {BooksService} from '../books.service';
import { BookPipe } from '../book.pipe'
import { Observable } from 'rxjs/internal/Observable';



describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListComponent, BookPipe],
      imports:[RouterTestingModule , HttpClientTestingModule],
      providers:[BooksService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Shoul render the array book lists id properly',()=>{
    component.bookLists = [{id:"1",bookName:"Algebra",bookAuthor:"Max",bookCatagory:"Mathematics"}];

    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.id'));
    let el:HTMLElement = de.nativeElement

    expect(el.innerText).toContain('1');
  });
  it('Shoul render the array book lists bookName properly',()=>{
    component.bookLists = [{id:"1",bookName:"Algebra",bookAuthor:"Max",bookCatagory:"Mathematics"}];

    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.bookName'));
    let el:HTMLElement = de.nativeElement

    expect(el.innerText).toContain('Algebra');
  });

  it('Shoul render the array book lists bookAuthor properly',()=>{
    component.bookLists = [{id:"1",bookName:"Algebra",bookAuthor:"Max",bookCatagory:"Mathematics"}];

    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.bookAuthor'));
    let el:HTMLElement = de.nativeElement

    expect(el.innerText).toContain('Max');
  });
  it('Shoul render the array book lists book Catagory properly',()=>{
    component.bookLists = [{id:"1",bookName:"Algebra",bookAuthor:"Max",bookCatagory:"Mathematics"}];

    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.bookCatagory'));
    let el:HTMLElement = de.nativeElement

    expect(el.innerText).toContain('Mathematics');
  });
});
