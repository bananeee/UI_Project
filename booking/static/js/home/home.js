function myFunction(x) {
  if (x.matches) {
    // If media query matches
    document.getElementById('nav').classList.remove('large-nav');
    document.getElementById('nav').classList.add('small-nav');
  } else {
    document.getElementById('nav').classList.add('large-nav');
    document.getElementById('nav').classList.remove('small-nav');
  }
}

var x = window.matchMedia('(max-width: 900px)');
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

var navbar = document.getElementById('nav');
window.onscroll = function () {
  if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};
