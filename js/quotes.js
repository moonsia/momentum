/* quotes */


const quotes = [
    {
        quote: "The shortest answer is doing the thing.",
        author:"Hemingway",
    },
    {
        quote: "We're stronger in the places that we've been broken.",
        author:"Hemingway",

    },
    {
        quote: "The best way to find out if you can trust somebody is to trust them.",
        author:"Hemingway",
    },
    {
        quote: "Worry a little bit every day and in a lifetime you will lose a couple of years.",
        author:"Hemingway",
    },
    {
        quote: "If something is wrong, fix it if you can.",
        author:"Hemingway",
    },
    {
        quote: "But train yourself not to worry: Worry never fixes anything.",
        author:"Hemingway",
    },
    {
        quote: "There is nothing noble in being superior to your fellow men. True nobility lies in being superior to your former self.",
        author:"Hemingway",
    }

];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

    
const todayQuote = quotes[Math.floor(Math.random()* quotes.length)];




quote.innerText = todayQuote.quote;
author.innerText = `- ${todayQuote.author} -`;