const quotes = document.getElementById("quotes");
const author = document.getElementById("authors");
const newQuote = document.getElementById("newQuote");
const tweet = document.getElementById("tweetMe")
let realData = "";

const getNewQuotes = () => {
    let rnum = Math.floor(Math.random() * 1600);
    quotesData = realData[rnum]
    quotes.innerText = `${quotesData.text}`;
    quotesData.author == null
        ? (author.innerText = 'By Unknown')
        : (author.innerText = `By ${quotesData.author}`);
}

const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        getNewQuotes();
    } catch (error) { }
};

const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text} By ${quotesData.author}`;
    window.open(tweetPost);
}

newQuote.addEventListener("click", getNewQuotes);
tweet.addEventListener("click", tweetNow);
getQuotes();

function copyClip() {
    /* Get the text field */
    const txt = document.getElementById("quotes");
    const copiedtxt = txt.innerText;
    var copyText = copiedtxt;

    navigator.clipboard.writeText(copiedtxt);
    alert("Copied!")
}
