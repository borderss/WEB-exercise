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

  quotecontainer.setAttribute(
    "style",
    `transform: perspective(500px) rotateX(${degY}deg) rotateY(${degX}deg);`
  )
}

let moveListener = quote.addEventListener("mousemove", quotePerspectiveHandler)

quote.addEventListener("mouseleave", () => {
  quote.removeEventListener("mousemove", quotePerspectiveHandler)

  quotecontainer.setAttribute(
    "style",
    `transform: perspective(500px) rotateX(0deg) rotateY(0deg); transition: 0.5s ease-out;  `
  )
  setTimeout(() => {
    quote.addEventListener("mousemove", quotePerspectiveHandler)
  }, 500)
})

document.getElementById("disc").addEventListener("click", () => {
  navigator.clipboard.writeText("SnowyBall#0001")

  let span = document.getElementById("disc").getElementsByTagName("span")[0]

  span.innerHTML = "Copied!"
  span.style.color = "#0c2"
  setTimeout(() => {
    span.innerHTML = "SnowyBall#0001"
    span.style.color = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--text")
    span.style.transition = "0.15s"

    span.removeAttribute("style")
  }, 500)
})

document.getElementById("email").addEventListener("click", () => {
  console.log("DAUNIS")
})

document.getElementById("email").addEventListener("click", () => {
  navigator.clipboard.writeText("liepins01@gmail.com")
  window.location = "mailto: liepins01@gmail.com"

  let span = document.getElementById("email").getElementsByTagName("span")[0]

  span.innerHTML = "Redirecting!"
  span.style.color = "#0c2"
  setTimeout(() => {
    span.innerHTML = "liepins01@gmail.com"
    span.style.color = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--text")
    span.style.transition = "0.15s"

    span.removeAttribute("style")
  }, 500)
})

var observer = new IntersectionObserver((entries) => {
  console.log(entries)
  entries.forEach((e) => {
    if (e.isIntersecting === true) {
      e.target.setAttribute(
        "style",
        `transition-delay: ${e.target.getAttribute(
          "stagger"
        )} !important; opacity: 1 !important; transform: translateY(0px) !important; transition: opacity 0.75s, transform 0.75s;`
      )
      setTimeout(() => {
        e.target.classList.remove("float-in")
        setTimeout(() => {
          e.target.removeAttribute("style")
        }, 3000)
      }, 750)
    }
  })
})

Array.from(document.querySelectorAll(".float-in")).forEach((e) => {
  observer.observe(e)
})

function clearNavbar() {
  Array.from(
    document.querySelector(".navbar").getElementsByTagName("a")
  ).forEach((e) => {
    e.classList.remove("active-nav-item")
  })
}

Array.from(document.querySelector(".navbar").getElementsByTagName("a")).forEach(
  (e) => {
    e.addEventListener("click", (_) => {
      if (
        !e.classList.contains("active-nav-item") &&
        !e.classList.contains("info")
      ) {
        clearNavbar()
        e.classList.add("active-nav-item")
      }
    })
  }
)
