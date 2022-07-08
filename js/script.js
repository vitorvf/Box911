//Mudar cor do Header ao Rolar
var nav = document.getElementById("header")
window.addEventListener("scroll", function (event) {
  if (window.pageYOffset > 547) {
    nav.style.background = "black"
  } else {
    nav.style.background = "black"
  }
})
// -------------------------------------------------------

// Função Efeito
const target = document.querySelectorAll("[data-anime]")
const animationClass = "animate"

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass)
    } else {
      element.classList.remove(animationClass)
    }
  })
}

animeScroll()

if (target.length) {
  window.addEventListener("scroll", function () {
    animeScroll()
  })
}

// --------------------------------------------

// Função Scroll Suave

const menuItems = document.querySelectorAll('.menu  a[href^="#"]')

menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick)
})

function getScrollTopByHref(element) {
  const id = element.getAttribute("href")
  return document.querySelector(id).offsetTop
}

function scrollToIdOnClick(event) {
  event.preventDefault()
  const to = getScrollTopByHref(event.target) - 80

  ScrollToPosition(to)
}

function ScrollToPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth",
  })

  //   smoothScrollTo(0, to)
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset
  const startY = window.scrollY || window.pageYOffset
  const distanceX = endX - startX
  const distanceY = endY - startY
  const startTime = new Date().getTime()

  duration = typeof duration !== "undefined" ? duration : 400

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from
  }

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime
    const newX = easeInOutQuart(time, startX, distanceX, duration)
    const newY = easeInOutQuart(time, startY, distanceY, duration)
    if (time >= duration) {
      clearInterval(timer)
    }
    window.scroll(newX, newY)
  }, 1000 / 60) // 60 fps
}

// ---------------------------------------------------------- Hamburger Menu

const menuHamburguer = document.querySelector(".hamburguer--menu")
const menu = document.getElementById("menu")
const menuItems2 = document.querySelectorAll("#menu a")
const menuXfechar = document.querySelector(".xfechar")

menuHamburguer.addEventListener("click", (e) => {
  menu.style.display = "flex"
  menuXfechar.style.display = "flex"

  menuItems2.forEach((item) => {
    item.addEventListener("click", (e) => {
      menu.style.display = "none"
      menuXfechar.style.display = "none"

      console.log(item)
    })
  })
  // if ($('#hbmenu').hasClass('ativo')) {
  //   $('#hbmenu').addClass('desativado'); //coloca a classe "ativo" no id=menu
  // } else {
  //   console.log('Lambe meu ovo');
  // }
})

window.addEventListener("resize", (e) => {
  if (window.innerWidth < 575.98) {
    menu.style.display = "none"
  } else {
    menu.style.display = "flex"
  }
})

menuXfechar.addEventListener("click", (e) => {
  menu.style.display = "none"
  menuXfechar.style.display = "none"
})

// menu.addEventListener('click', (e) => {
//   if (menu.style.display === 'flex') {
//     console.log('ddkodk');
//   }
// });
