
var quotes = [
    "The best revenge is massive success.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don't watch the clock; do what it does. Keep going.",
    "The only way to do great work is to love what you do.",
    "Success usually comes to those who are too busy to be looking for it."
];

function showQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];

    document.getElementById("hamozo").innerHTML = `<p class='fs-3'>${randomQuote}</p>`;
}