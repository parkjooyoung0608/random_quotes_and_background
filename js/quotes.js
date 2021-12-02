const quotes = [
    {
        quote: "무엇을 선택하느냐 보다는 선택 이후의 행동이 더 중요하다.",
        author: "-유재석-"
    },
    {
        quote: "혀를 다스리는 것은 나지만 내뱉어진 말이 거꾸로 나를 다스린다.",
        author: "-유재석-"
    },
    {
        quote: "삶에서 가장 중요한 것은 자기 자신이 마음에 들어야 하는 것이다.",
        author: "-박진영-"
    },
    {
        quote: "돈이 행복이 아니지만돈 없이 행복하긴 어렵다",
        author: "-옥택연-"
    },
    {
        quote: "'일을 즐기라'라는 말은 기분 좋게 하는 말에 불과하다.",
        author: "-서장훈-"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;