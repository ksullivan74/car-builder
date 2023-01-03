import { carsRUs } from "./main.js";

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = carsRUs()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("state has changed, render all html")
    renderAllHTML()
})