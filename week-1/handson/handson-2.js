const heading = document.getElementById('heading')


heading.textContent = 'Welcome to the world of JavaScript'

function changeHeading(element, text) {
    element.textContent = text
    element.style.color = "red"
}

const button = document.getElementById('button')
button.addEventListener("mouseenter", () => {
    changeHeading(heading, "Hello World")
})

button.addEventListener("mouseleave", () => {
    changeHeading(heading, "Welcome to the world of JavaScript")
})