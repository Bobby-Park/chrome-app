const quotes = [
{
    quote: "Don't eat until you're full.",
    author: "Halam Park"
},
{
    quote: "Diamond is batter than normal,",
    author: "Halam Park"
},
{
    quote: "Magic?",
    author: "Halam Park"
},
{
    quote: "Lick Lick!",
    author: "Juchan Kim"
},
{
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
},
{
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
},
{
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa"
},
{
    quote: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
},
{
    quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson"
},
{
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin"
}
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;