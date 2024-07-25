let captchatext = "Captcha anti stupid simple bot/crawler. What is the name of the author of this website?";
let captchawrong = "Go away stupid bot, and don't fill my webmail with trash! 👿";

// Cesar.
function decrypt(text, shift = 3) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const isUpperCase = char === char.toUpperCase();
            const base = isUpperCase ? 65 : 97;
            return String.fromCharCode(((code - base - shift + 26) % 26) + base);
        }
        return char;
    }).join('');
}

// Envelope click.
document.addEventListener('DOMContentLoaded', (event) => {
    return;
    document.getElementById("envelope").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior.
        let i = prompt(captchatext);
        if (i.toLowerCase() == decrypt("jlxolr")) window.open(`mailto:${decrypt("sxeolf@jlxolrqlvl.lw")}`, '_blank');
        else alert(captchawrong);
    });
});
