const BookStor= require('../model/bookModel');

exports.bookList = (req,res,next)=>{
res.json(BookStor.bookStore())
};

exports.bookDetail= (req,res,next)=>{
    const name = req.params.bookName;
    console.log(name)
  res.json(BookStor.bookStore().filter(book=>book.bookName === name))
}