import TypeIt from 'typeit';
import KUTE from 'kute.js'

const technologies = ["Astro", "Tailwind CSS", "daisyUI", "TypeIt", "KUTE.js"];

// Writing technologies in the footer.
function executeTechs(){
    let t = new TypeIt("#techs", {afterComplete: () => executeTechs(),});
    t.options({lifeLike: true });
    for (let i = 0; i < technologies.length; i++) {
        let timedelay = Math.floor(Math.random() * 3) + 1;
        timedelay *= 1000;
        t.type(technologies[i], {delay: timedelay}).delete(null, {delay: timedelay});
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


