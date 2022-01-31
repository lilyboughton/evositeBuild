const slide1 = document.getElementById("1")
const slide2 = document.getElementById("2")
const slide3 = document.getElementById("3")
const clone = document.getElementById("clone1")


const carousel = (x) => {
    if (x.matches) { // If media query matches
        slide2.classList.add("hidden")
        document.getElementById("carouselLeft").addEventListener("click", () => {
            mobileCarouselLeft()
        })

        document.getElementById("carouselRight").addEventListener("click", () => {
            mobileCarouselRight()
        })

    } else {
        slide2.classList.remove("hidden")
        document.getElementById("carouselLeft").addEventListener("click", () => {
            desktopCarouselLeft()
        })

        document.getElementById("carouselRight").addEventListener("click", () => {
            desktopCarouselRight()
        })
    }
}

let x = window.matchMedia("(max-width: 1200px)")
carousel(x) // Call listener function at run time
x.addEventListener('change', carousel) // Attach listener function on state changes



const desktopCarouselLeft = () => {
    if (slide2.dataset.pos === "r") {
        slide2.dataset.pos = "h"
        slide2.classList.add("hidden")
        slide1.classList.add("hidden")

        clone.dataset.pos = "r"
        clone.classList.remove("hidden")
        slide3.dataset.pos = "l"
        slide3.classList.remove("hidden")
    }

    else if (clone.dataset.pos === "r") {
        clone.dataset.pos = "h"
        clone.classList.add("hidden")

        slide3.dataset.pos = "r"
        slide2.dataset.pos = "l"
        slide2.classList.remove("hidden")
    }

    else if (slide3.dataset.pos === "r") {
        slide3.dataset.pos = "h"
        slide3.classList.add("hidden")

        slide1.dataset.pos = "l"
        slide1.classList.remove("hidden")
        slide2.dataset.pos = "r"
        slide2.classList.remove("hidden")
    }
}

const desktopCarouselRight = () => {
    if (slide1.dataset.pos === "l") {
        slide1.classList.add("hidden")
        slide1.dataset.pos = "h"

        slide2.dataset.pos = "l"
        slide3.dataset.pos = "r"
        slide3.classList.remove("hidden")
    }

    else if (slide2.dataset.pos === "l") {
        slide2.dataset.pos = "h"
        slide2.classList.add("hidden")

        slide3.dataset.pos = "l"
        clone.dataset.pos = "r"
        clone.classList.remove("hidden")
    }

    else if (slide3.dataset.pos === "l") {
        slide3.dataset.pos = "h"
        slide3.classList.add("hidden")
        clone.classList.add("hidden")

        slide1.dataset.pos = "l"
        slide1.classList.remove("hidden")
        slide2.dataset.pos = "r"
        slide2.classList.remove("hidden")
    }
}


const mobileCarouselRight = () => {
    if (slide1.dataset.pos === "l") {
        slide1.classList.add("hidden")
        slide1.dataset.pos = "h"

        slide2.dataset.pos = "l"
        slide2.classList.remove("hidden")
    }

    else if (slide2.dataset.pos === "l") {
        slide2.dataset.pos = "h"
        slide2.classList.add("hidden")

        slide3.dataset.pos = "l"
        slide3.classList.remove("hidden")
    }

    else if (slide3.dataset.pos === "l") {
        slide3.dataset.pos = "h"
        slide3.classList.add("hidden")

        slide1.dataset.pos = "l"
        slide1.classList.remove("hidden")
    }
}

const mobileCarouselLeft = () => {
    if (slide1.dataset.pos === "l") {
        slide1.dataset.pos = "h"
        slide1.classList.add("hidden")

        slide3.dataset.pos = "l"
        slide3.classList.remove("hidden")
    }

    else if (slide3.dataset.pos === "l") {
        slide3.dataset.pos = "h"
        slide3.classList.add("hidden")

        slide2.dataset.pos = "l"
        slide2.classList.remove("hidden")
    }

    else if (slide2.dataset.pos === "l") {
        slide2.dataset.pos = "h"
        slide2.classList.add("hidden")

        slide1.dataset.pos = "l"
        slide1.classList.remove("hidden")
    }
}