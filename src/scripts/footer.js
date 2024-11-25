window.typeItInstanceFooter = null;
window.kuteAnimationFooter = null;

async function typeAndHeartEffect() {

  const TypeIt = (await import('typeit')).default;
  const KUTE = (await import('kute.js')).default;
  
  const technologies = [
    {"name": "Astro", "link": "https://astro.build"},
    {"name": "Tailwind CSS", "link": "https://tailwindcss.com"},
    {"name": "daisyUI", "link": "https://daisyui.com"},
    {"name": "TypeIt", "link": "https://www.typeitjs.com"},
    {"name": "KUTE.js", "link": "https://thednp.github.io/kute.js/"},
    {"name": "Font Awesome", "link": "https://fontawesome.com/"},
  ];

  function cleanupPreviousAnimations() {
    if (window.typeItInstanceFooter != null) {
      window.typeItInstanceFooter.destroy();
      window.typeItInstanceFooter = null;
    }
    if (window.kuteAnimationFooter != null) {
      window.kuteAnimationFooter.stop();
      window.kuteAnimationFooter = null;
    }
  }

  // Writing techs.
  function writeTechs() {
    
    window.typeItInstanceFooter = new TypeIt("#techs", {
      afterComplete: writeTechs,
      lifeLike: true
    });

    technologies.forEach(tech => {
      const timedelay = (Math.floor(Math.random() * 3) + 1) * 1000;
      const link = `<a style="text-decoration: underline;" href="${tech.link}">${tech.name}</a>`;
      window.typeItInstanceFooter.type(link, {delay: timedelay}).delete(null, {delay: timedelay});
    });

    window.typeItInstanceFooter.go();
  }

  cleanupPreviousAnimations();
  writeTechs();

  // Animating heart in the footer.
  const heartWrapper = document.querySelector('#heart-wrapper');
  if (heartWrapper) {
    const tweenStart = KUTE.fromTo(heartWrapper, { scale: 1 }, { scale: 1.5 }, { duration: 1000, easing: 'easingCubicInOut'});
    const tweenReverse = KUTE.fromTo(heartWrapper, { scale: 1.5 }, { scale: 1 }, { duration: 1000, easing: 'easingCubicInOut'});
    tweenStart.chain(tweenReverse);
    tweenReverse.chain(tweenStart);
    window.kuteAnimationFooter = tweenStart;
    tweenStart.start();
  }

}

function loadFontAwesome() {
  if (!document.getElementById('fontawesome-css')) {
    const link = document.createElement('link');
    link.id = 'fontawesome-css';
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);
  }
}

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

// Reinitialize after each page transition.
document.addEventListener('astro:page-load', typeAndHeartEffect);
document.addEventListener('astro:page-load', loadFontAwesome);
// Envelope click.
document.addEventListener('astro:page-load', () => {
  document.getElementById("envelope").addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default link behavior.
      let i = prompt(captchatext);
      if (i && i.toLowerCase() == decrypt("jlxolr")) window.open(`mailto:${decrypt("sxeolf@jlxolrqlvl.lw")}`, '_blank');
      else alert(captchawrong);
  });
});


