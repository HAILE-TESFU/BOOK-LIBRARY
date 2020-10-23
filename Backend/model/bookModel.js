const bookList = [
  {
    id:(Math.random() * 100).toString(),
    bookName: "Angular",
    bookAuthor: "Natte Murray",
    bookCatagory: "Web Development",
  },
  {
    id: (Math.random() * 100).toString(),
    bookName: "React Js",
    bookAuthor: "Kathelen Peterson",
    bookCatagory: "Web Development",
  },
  {
    id: (Math.random() * 100).toString(),
    bookName: "Algerbra",
    bookAuthor: "Hagos",
    bookCatagory: "Mathematics",
  },
  {
    id: (Math.random() * 100).toString(),
    bookName: "Geometry",
    bookAuthor: "Alazar",
    bookCatagory: "Mathematics",
  },
  {
    id: (Math.random() * 100).toString(),
    bookName: "JavaScript",
    bookAuthor: "Maximillian",
    bookCatagory: "Programming Language",
  },
  {
    id: (Math.random() * 100).toString(),
    bookName: "Java",
    bookAuthor: "Maximillian",
    bookCatagory: "Programming Language",
  },
  {
    id: (Math.random() * 100).toString(),
    bookName: "Phyton",
    bookAuthor: "Elon Musk",
    bookCatagory: "Programming Language",
  },
];

exports.bookStore = ()=>{
    return bookList
}
