document.addEventListener('astro:page-load', () => {
  let navs = document.getElementsByClassName("navbar-element")
  for (let nav of navs) {
    nav.setAttribute("class", "navbar-element")
    if (nav.children[0].getAttribute("href") === window.location.pathname) {
      nav.setAttribute("class", "navbar-element navbar-active")
    }
    // Blog articles are under /blog.
    if (nav.children[0].getAttribute("href").indexOf("blog") !== -1 && window.location.pathname.indexOf("blog") !== -1) {
      nav.setAttribute("class", "navbar-element navbar-active")
    }
  }
});
