window.onload = init;
function init() {
    quoteGenerator() 
}

function quoteGenerator(){
    let quoteSize = QUOTEBANK.length;
    let randomIndex = Math.floor(Math.random() *quoteSize);
    let randomQoutData = QUOTEBANK[randomIndex];

    document.getElementById("text").innerText = randomQuoteData.quote;
    document.getElementById("author").innerText = randomQuoteData.author;
    

}