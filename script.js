const quoteContainer= document.getElementById('quote-container');
const authortext= document.getElementById('author');
const  quotetext =document.getElementById('quote');
const twitterbtn=document.getElementById('twitter');
const newQuotesbtn=document.getElementById('new-qoute');






// function newQuotes(){
//     const quote= localQuotes[Math.floor(Math.random()* localQuotes.length)];
//     console.log(quote);
// }
// newQuotes();

   //ORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR FROM LINK 
//////display quotes
let apiQuotes=[];
function newQuotes(){
    ////pick from arrray
    const quote= apiQuotes[Math.floor(Math.random()* apiQuotes.length)];
    // authortext.textContent=quote.author;
    ///if author not there then printt none
    if(!quote.author)
    {
        authortext.textContent='none';
    }
    else
    {
        authortext.textContent=quote.author;
    }
    quotetext.textContent=quote.text;
}
/////get quotes from api 
async function getQuotes(){
    const apiurl='https://type.fit/api/quotes';
    try{
        const respones= await fetch(apiurl);
        apiQuotes= await respones.json();
        newQuotes();
    }
    catch(error){

    }
}

//tweett 
function tweetQuote()
{
const twitterurl=`https://about.twitter.com/en ;`
window.open(twitterurl,'_blank');
}
twitterbtn.addEventListener('click',tweetQuote);
newQuotesbtn.addEventListener('click',newQuotes);
//on load
getQuotes();
