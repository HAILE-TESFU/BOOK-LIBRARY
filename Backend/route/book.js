const express= require('express');

const router= express.Router();

const bookController= require('../controller/bookController');


router.get('/book-list',bookController.bookList);
router.get('/book-detail/:bookName',bookController.bookDetail);



module.exports = router