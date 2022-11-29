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
