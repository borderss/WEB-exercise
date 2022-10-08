// Scrollbar handling
var isScrolling

window.addEventListener("scroll", (e) => {
  if (!document.body.classList.contains("scroll-active")) {
    document.body.classList.toggle("scroll-active")
  }

  clearTimeout(isScrolling)
  isScrolling = setTimeout(() => {
    document.body.classList.toggle("scroll-active")
  }, 400)
})
