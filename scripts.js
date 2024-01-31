function addStickyHeader() {
  const h1 = document.querySelector("h1");
  if (h1.getBoundingClientRect().top <= 0) {
    h1.classList.add("sticky-header");
  } else {
    h1.classList.remove("sticky-header");
  }
}

window.onscroll = function () {
  addStickyHeader();
}

addStickyHeader();

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}