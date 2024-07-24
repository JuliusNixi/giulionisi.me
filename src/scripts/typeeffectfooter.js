import TypeIt from 'typeit';
import KUTE from 'kute.js'

const technologies = [
    {"name": "Astro", "link": "https://astro.build"},
    {"name": "Tailwind CSS", "link": "https://tailwindcss.com"},
    {"name": "daisyUI", "link": "https://daisyui.com"},
    {"name": "TypeIt", "link": "https://www.typeitjs.com"},
    {"name": "KUTE.js", "link": "https://thednp.github.io/kute.js/"},
    {"name": "Cluade 3.5", "link": "https://cluade.ai"},
    {"name": "Font Awesome", "link": "https://fontawesome.com/"},
];

// Writing technologies in the footer.
function executeTechs(){
    let t = new TypeIt("#techs", {afterComplete: () => executeTechs(),});
    t.options({lifeLike: true });
    for (let i = 0; i < technologies.length; i++) {
        let timedelay = Math.floor(Math.random() * 3) + 1;
        timedelay *= 1000;
        let link = '<a style="text-decoration: underline;" href="link">name</a>'.replace('link', technologies[i]["link"]).replace('name', technologies[i]["name"]);
        t.type(link, {delay: timedelay}).delete(null, {delay: timedelay});
    }
    t.go();
}
executeTechs();

// Animating heart in the footer.
var tweenStart = KUTE.fromTo('#heart-wrapper', { scale: 1 }, { scale: 1.5 }, { duration: 1000, easing: 'easingCubicInOut'});
var tweenReverse = KUTE.fromTo('#heart-wrapper', { scale: 1.5 }, { scale: 1 }, { duration: 1000, easing: 'easingCubicInOut'});

tweenStart.chain(tweenReverse);
tweenReverse.chain(tweenStart);

tweenStart.start();


