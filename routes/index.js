var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(randOne);
});

module.exports = router;


//added code below
const catPics = 
[
{ id:1, url:'https://cdn2.thecatapi.com/images/a9j.jpg'},
{ id:2, url:'https://cdn2.thecatapi.com/images/dje.jpg'},
{ id:3, url:'https://cdn2.thecatapi.com/images/bir.jpg'},
{ id:4, url:'https://cdn2.thecatapi.com/images/9jf.jpg'},
{ id:5, url:'https://cdn2.thecatapi.com/images/bkc.jpg'},
{ id:6, url:'https://cdn2.thecatapi.com/images/d2o.jpg'},
{ id:7, url:'https://cdn2.thecatapi.com/images/MTk2NTM4NA.jpg'},
{ id:8, url:'https://cdn2.thecatapi.com/images/ajA3tUqUR.jpg'},
{ id:9, url:'https://cdn2.thecatapi.com/images/7l5.jpg'},
{ id:10, url:'https://cdn2.thecatapi.com/images/e9d.jpg'},
];



const randOne = catPics[Math.floor(Math.random() * catPics.length)];

console.log('Random cat: ', randOne);