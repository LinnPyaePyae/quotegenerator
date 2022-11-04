const newQuote = document.getElementById("new-quote");
const quotehtml = document.getElementById('quote');
const author = document.getElementById('author');
const quotecontainer = document.getElementById('quote-container');
const load = document.getElementById('loader');


let quoteData = [];

const loading = () => {
    load.hidden = false;
    quotecontainer.hidden = true;
};



const datashow = () => {
    load.hidden = true;
    quotecontainer.hidden = false;
};

const randomQuote = () => {
    loading();
    const quote = quoteData[Math.floor(Math.random() * quoteData.length)];
    quotehtml.textContent = quote.text;
    author.textContent = quote.author;
    if (!quote.author) {
        author.textContent = 'Anynomous';
    } else {
        author.textContent = quote.author;

    }

    if (quote.text.length > 50) {
        quotehtml.classList.add('long-quote');
    } else {
        quotehtml.classList.remove('long-quote');
    }
    datashow();

};

newQuote.addEventListener('click', randomQuote);

async function quoteGenerator() {
    loading();
    const apiUrl = "https://type.fit/api/quotes";

    try {
        const response = await fetch(apiUrl);
        quoteData = await response.json();
        randomQuote();
    } catch (error) {
        console.log(error);
    }
}

quoteGenerator();