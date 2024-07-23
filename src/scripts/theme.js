export function currentTheme() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function handleThemeChange(event) {
  if (event.matches) {
    darkModeFunction();
  } else {
    lightModeFunction();
  }
}

export function darkModeFunction() {
  document.documentElement.setAttribute('data-theme', 'dark');
  document.getElementById("favicon").setAttribute("href", window.lightModePath);
  document.getElementById("header-logo").setAttribute("src", window.lightModePath);
}

export function lightModeFunction() {
  document.documentElement.setAttribute('data-theme', 'light');
  document.getElementById("favicon").setAttribute("href", window.darkModePath);
  document.getElementById("header-logo").setAttribute("src", window.darkModePath);
}

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkModeMediaQuery.addEventListener('change', handleThemeChange);

window.darkModeFunction = darkModeFunction;
window.lightModeFunction = lightModeFunction;
window.currentTheme = currentTheme;

