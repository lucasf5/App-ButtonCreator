const controles = document.querySelector("#controles");
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn")


function handleChange(event) {

    const name = event.target.name
    const value = event.target.value
    handleStyle[name](value)
    showCss()
}

const handleStyle = {
    element: btn,
    backgroundColor(value) {
        this.element.style.backgroundColor = value
    },
    color(value) {
        this.element.style.color = value
    },
    height(value) {
        this.element.style.height = value + "px"
    },
    width(value) {
        this.element.style.width = value + "px"
    },
    text(value) {
        this.element.innerHTML = value
    },
    border(value) {
        this.element.style.border = value
    },
    fontSize(value) {
        this.element.style.fontSize = value + "px"
    },
    fontFamily(value) {
        this.element.style.fontFamily = value
    },
    borderRadius(value) {
        this.element.style.borderRadius = value + "px"
    }
    
}

function showCss() {
    cssText.innerHTML = "<span> " + btn.style.cssText.split(";").join(";</span><span>")
}

controles.addEventListener("change", handleChange)