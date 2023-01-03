import { getTechnology } from "./database.js";
import { setTechnology } from "./database.js";
const technologyArray = getTechnology()

export const technologies = () => {
    
    let html = `<h2>Technologies</h2>`
    html += `<select id = "tech">`
    html += `<option value = "0">select a technology package</option>`

    for ( const technology of technologyArray ){
        html += `<option value ="${technology.id}">${technology.techPackage}</option>`
    }
    html += `</select>`
    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {
            const chosenOption = changeEvent.target.value
            for ( const technology of technologyArray ){
                if (parseInt(chosenOption) === technology.id){
                    setTechnology(parseInt(changeEvent.target.value))
                }
            }
        }
    }
)

/*
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("child")) {
            const [, childID] = itemClicked.id.split("--")
            for (const child of children) {
                if ( child.id === parseInt(childID)){
                    window.alert(`${child.name}'s wish is to ${child.wish}.`)
                }
            }
        }
    }
)
*/