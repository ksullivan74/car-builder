import { getInterior, setInterior } from "./database.js";
const interiorArray = getInterior()

export const interiors = () => {
    
    let html = `<h2>Interiors</h2>`
    html += `<select id = "interior">`
    html += `<option value = "0">select an interior package</option>`

    for ( const interior of interiorArray ){
        html += `<option value ="${interior.id}">${interior.fabric}</option>`
    }
    html += `</select>`
    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
            const chosenOption = changeEvent.target.value
            for ( const interior of interiorArray ){
                if (parseInt(chosenOption) === interior.id){
                    setInterior(parseInt(changeEvent.target.value))
                }
            }
        }
    }
)