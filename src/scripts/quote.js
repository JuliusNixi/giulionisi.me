var changeQuote = function() {
    if (document.getElementById("quote") === null) {
        return;
    }
    var quotes = [
    {
        quote: "Be greeted psychoneurotics! <br><br>For you see sensitivity in the insensitivity of the world, uncertainty among the world's certainties.<br> For you often feel others as you feel yourselves. <br><br>For you feel the anxiety of the world, and its bottomless narrowness and self-assurance. <br>For your phobia of washing your hands from the dirt of the world, for your fear of being locked in the world’s limitations. for your fear of the absurdity of existence. <br>For your subtlety in not telling others what you see in them. <br><br>For your awkwardness in dealing with practical things, and for your practicalness in dealing with unknown things, for your transcendental realism and lack of everyday realism, for your exclusiveness and fear of losing close friends, for your creativity and ecstasy, for your maladjustment to that 'which is' and adjustment to that which 'ought to be', for your great but unutilized abilities. <br>For the belated appreciation of the real value of your greatness which never allows the appreciation of the greatness of those who will come after you.<br><br> For your being treated instead of treating others, for your heavenly power being forever pushed down by brutal force; for that which is prescient, unsaid, infinite in you. <br>For the loneliness and strangeness of your ways.<br> Be greeted!",
        author: "Kazimierz Dąbrowski [Psychoneurosis is not ilness]"
    },
    {
        quote: "The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.",
        author: "Bertrand Russell"
    },
]
    // Chose a random quote.
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    document.getElementById("quote").innerHTML = randomQuote.quote;
    document.getElementById("author").textContent = "~ " + randomQuote.author;
}

// First load.
changeQuote();

// On swap.
document.addEventListener("astro:after-swap", function() {
    changeQuote();
});


