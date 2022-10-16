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

var quote = document.getElementsByClassName("quote")[0]
var quotecontainer = document.getElementById("quote-container")

let quotePerspectiveHandler = (e) => {
  let x = e.offsetX
  let y = e.offsetY

  let degX = Math.max(-10, Math.min(10, (x - quote.clientWidth / 2) / 50))
  let degY = -Math.max(-10, Math.min(10, (y - quote.clientHeight / 2) / 20))

  quotecontainer.setAttribute("style", `transform: perspective(500px) rotateX(${degY}deg) rotateY(${degX}deg);`)
}

let moveListener = quote.addEventListener('mousemove', quotePerspectiveHandler)

quote.addEventListener('mouseleave', ()=>{
  quote.removeEventListener('mousemove', quotePerspectiveHandler)

  quotecontainer.setAttribute("style", `transform: perspective(500px) rotateX(0deg) rotateY(0deg); transition: 0.5s ease-out;  `)
  setTimeout(()=>{
    quote.addEventListener('mousemove', quotePerspectiveHandler)
  }, 500)
})