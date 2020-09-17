const quotes = [
    {
      quote: "Life isn’t about getting and having, it’s about giving and being.",
      author: "Kevin Kruse"
    },
    {
      quote: "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "Napoleon Hill"
    },
    {
      quote:"Life is what happens to you while you’re busy making other plans.",
      author:"John Lennon"
    },
    {
      quote:"Life isn’t about getting and having, it’s about giving and being.",
      author:"Kevin Kruse"
    },
    {
      quote:"Whatever the mind of man can conceive and believe, it can achieve.",
      author:"Napoleon Hill"},
    {
      quote:"Strive not to be a success, but rather to be of value.",
      author:"Albert Einstein"
    },
    {
      quote:"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
      author:"Robert Frost"
    },
     ];
  
  const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
  
  let newQuote = document.getElementById('text');
  let writer = document.getElementById('author');
  let button =  document.getElementById('new-quote');
  let wrapperColor = document.querySelector('#wrapper');
  let twitterColor= document.querySelector('.buttons a i');
  let tumbleColor= document.querySelector('.buttons #tumble-quote i');
  let quoteColor= document.getElementById('quotation'); 
  let tweetbutton = document.getElementById('tweet-quote');
                                    
                                        
                                        
  
  function randomNumber() {
    return Math.floor(Math.random() * (quotes.length-1));
  }
  
  
  
  button.onclick = function quoteGenerator() {
    
    let random = randomNumber();
   
    if ( newQuote.innerHTML != quotes[random].quote) {

    newQuote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].author;
    wrapperColor.style.backgroundColor = colors[random];
    twitterColor.style.color = colors[random];
    tumbleColor.style.color = colors[random];
    quoteColor.style.color = colors[random];  
    button.style.backgroundColor = colors[random];  
    newQuote.style.color = colors[random]; 
    writer.style.color = colors[random];  
    }   
    
  };
  
  
  
  tweetbutton.onclick = function() {
  document.getElementById('tweet-quote').href = `https://twitter.com/intent/tweet?text=${newQuote.innerHTML} ${writer.innerHTML}`
  }

  /*else {
    newQuote.innerHTML = quotes[random+1].quote;
    writer.innerHTML = quotes[random+1].author;
    wrapperColor.style.backgroundColor = colors[random+1];
    twitterColor.style.color = colors[random+1];
    tumbleColor.style.color = colors[random+1];
    quoteColor.style.color = colors[random+1];  
    button.style.backgroundColor = colors[random+1];   
    newQuote.style.color = colors[random+1]; 
    writer.style.color = colors[random+1];   
  //
  
  */
  