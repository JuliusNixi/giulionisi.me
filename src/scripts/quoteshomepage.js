
let q = document.getElementById("quote");
// Each animation lasts 3 seconds.
let s = 8000;

function quotesListIterator(list) {
    let index = 0;
    
    return function() {
        if (index >= list.length) {
            index = 0;  // Reset to start when we've gone through all elements.
        }
        return list[index++];
    };
    
}

const quotes = ['apple', 'banana', 'cherry', 'date'];
const quotesIterator = quotesListIterator(quotes);

while (1) {
    // Change text.
    q.innerText = quotesIterator();

    // Focus in
    q.classList.remove("text-blur-out");
    q.classList.add("text-focus-in");

    // Sleep.
    await new Promise(r => setTimeout(r, s));

    // Blur out.
    q.classList.remove("text-focus-in");
    q.classList.add("text-blur-out");

    // Sleep.
    await new Promise(r => setTimeout(r, s));
}

