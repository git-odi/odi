const QUOTEBANK = [
    {
      quote: "All our dream can come true if we have the courage to pursue them.",
      author: "Walt Disney"
    },
    
    {
      quote: "Without hard work, nothing grows but weeds.",
      author: "Gordon B. Hinkley"
    },
    
    {
      quote: "You don't have to be great to start, but you have to start to be great.",
      author: "Zig Ziglar"
    },
    
    {
      quote: "Mistakes are proof that you are trying.",
      author: "Jennifer Lim"
    },
    
    {
      quote: "You owe it to yourself to become everything you've ever dream of being.",
      author: "From me to you."
    },
    
  ]; 
  
  window.onload = init;
  function init() {
     generateQuote(); 
  }
  
  function generateQuote() {
    let quoteSize = QUOTEBANK.length;
    let randomIndex = Math.floor(Math.random() * quoteSize);
    let randomQuoteData = QUOTEBANK[randomIndex];
    
   document.getElementById("text").innerText = randomQuoteData.quote;
   document.getElementById("author").innerText = randomQuoteData.author;
  }  