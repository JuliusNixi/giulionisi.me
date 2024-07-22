import TypeIt from 'typeit';
import KUTE from 'kute.js'

function endWritingEffectHomePage(){

  document.getElementsByClassName("ti-cursor")[0].remove();

  var rotateRight = KUTE.fromTo('#emoji', { rotate: -20 }, { rotate: 20 }, { duration: 1000, easing: 'easingCubicInOut' });
  var rotateLeft = KUTE.fromTo('#emoji', { rotate: 20 }, { rotate: -20 }, { duration: 1000, easing: 'easingCubicInOut' });
  
  rotateRight.chain(rotateLeft);
  rotateLeft.chain(rotateRight);

  rotateRight.start();

  rotateRight.options.repeat = Infinity;
  rotateLeft.options.repeat = Infinity;

}

new TypeIt("#title", {afterComplete: () => endWritingEffectHomePage(),}).go();

