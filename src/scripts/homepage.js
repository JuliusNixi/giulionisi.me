// Type effect.
window.typeItInstanceHomePage = null;
window.kuteAnimationHomePage = null;

// Homepage writing effect.
async function writeAndEndWriteEffect() {

  // Not on homepage.
  if (window.location.pathname !== '/') return;

  const TypeIt = (await import('typeit')).default;
  const KUTE = (await import('kute.js')).default;

  function cleanupPreviousAnimations(onlytypeone = 0) {
    if (window.typeItInstanceHomePage != null) {
      window.typeItInstanceHomePage.destroy();
      window.typeItInstanceHomePage = null;
    }
    if (window.kuteAnimationHomePage != null) {
      if (onlytypeone) return;
      window.kuteAnimationHomePage.stop();
      window.kuteAnimationHomePage = null;
    }
  }

  function endWritingEffect(){

    // Hand emoji rotate animation.
    const emoji = document.querySelector('#emoji');
    if (emoji) {
      const rotateRight = KUTE.fromTo(emoji, { rotate: -20 }, { rotate: 20 }, { duration: 1000, easing: 'easingCubicInOut' });
      const rotateLeft = KUTE.fromTo(emoji, { rotate: 20 }, { rotate: -20 }, { duration: 1000, easing: 'easingCubicInOut' });

      rotateRight.chain(rotateLeft);
      rotateLeft.chain(rotateRight);

      window.kuteAnimationHomePage = rotateRight;

      rotateRight.start();

      // Remove cursor.
      cleanupPreviousAnimations(1);

    }

  }

  // Writing effect homepage.
  cleanupPreviousAnimations(0);
  typeItInstanceHomePage = new TypeIt("#title", {afterComplete: () => endWritingEffect(),}).go();


}

// Reinitialize after each page transition.
document.addEventListener('astro:page-load', writeAndEndWriteEffect);

