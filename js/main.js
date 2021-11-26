const quote = document.getElementById("quotes");
const author = document.getElementById("authors");
let realData = "";

const getNewQuotes = () => {
    let rnum = Math.floor(Math.random() * 10);
    quote.innerText = `${realData[rnum].text}`;
    author.innerText = `${realData[rnum].author}`;
}

const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        getNewQuotes();
        console.log(realData[0].author);
    } catch (error) { }
};

getQuotes();