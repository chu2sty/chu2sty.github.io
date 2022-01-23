const quotes = [
    {
        quote:"안심하면서 먹는 한 조각 빵이 근심하면서 먹는 잔치보다 낫다.", 
        author:"이솝",
    },
    {
        quote:"선은 오직 하나 밖에 없다. 그것은 자기 양심에 따라 행동하는 일이다.", 
        author:"보봐르",
    },
    {
        quote:"두려움은 언제나 무지에서 샘솟는다.", 
        author:"에머슨",
    },
    {
        quote:"아무것도 모르는 것이 수치가 아니라 아무것도 배우려 하지 않는 것이 수치다.", 
        author:"소크라테스",
    },
    {
        quote:"해답은 알지만 부정하고 싶을 때 우리는 조언을 구한다.", 
        author:"에리카 정",
    },
    {
        quote:"상상력은 우리가 날릴 수 있는 가장 높은 연이다.", 
        author:"로렌 바콜",
    },
    {
        quote:"빛을 퍼뜨릴 수 있는 두 가지 방법이 있다. 촛불이 되거나 또는 그것을 비추는 거울이 되는 것이다.", 
        author:"이디스 워튼",
    },
    {
        quote:"사랑스런 눈을 갖고 싶다면 사람들에게서 좋은 점을 보아라.", 
        author:"오드리 햅번",
    },
    {
        quote:"내일에 아무런 도움이 되지 않는다면, 당신의 과거는 쫓아버려라.", 
        author:"오슬러",
    },
    {
        quote:"기쁨을 주는 사람만이 더 많은 기쁨을 즐길 수 있다.", 
        author:"알렉산더 듀마",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `\n -${todaysQuote.author}`;