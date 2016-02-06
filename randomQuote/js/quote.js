function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var quotes = [{
  "text": "When I die, I want to go peacefully like my grandfather died in his sleep. Not yelling and screaming like the passengers in his car.",
  "author": "Bob Monkhouse"
}, {
  "text": "I have six locks on my door all in a row. When I got out, I lock every other one. I figure no matter how long somebody stands there picking the locks, they are always locking three.",
  "author": "Elayne Boosler"
}, {
  "text": "Always borrow money from a pessimist. He won't expect it back.",
  "author": "Oscar Wilde"
}, {
  "text": "The scientific theory I like best is that the rings of Saturn are composed entirely of lost airline luggage.",
  "author": "Mark Russel"
}, {
  "text": "Friendship is like peeing on yourself: everyone can see it, but only you get the warm feeling that it brings.",
  "author": "Robert Block"
}, {
  "text": "First the doctor told me the good news: I was going to have a disease named after me.",
  "author": "Steve Martin"
}, {
  "text": "A successful man is one who makes more money than his wife can spend. A successful woman is one who can find such a man.",
  "author": "Lana Turner"
}, {
  "text": "How do you get a sweet little 80-year-old lady to say the F word? Get another sweet little 80-year-old lady to yell \"BINGO\"!",
  "author": "anonymous"
}, {
  "text": "My therapist told me the way to achieve true inner peace is to finish what I start. So far I've finished two bags of M&Ms and a chocolate cake. I feel better already.",
  "author": "Dave Barry"
}, {
  "text": "Dogs have masters. Cats have staff.",
  "author": "Anonymous"
}];


function genRndQuote() {
  var i = getRandomInt(0, quotes.length);
  return quotes[i];
}

$(document).ready(function() {
  $("#genQuote").click(function() {
    var currentQuote = genRndQuote();
    $("#quote").html(currentQuote.text);
    $("#author").html(currentQuote.author);
  });
});
