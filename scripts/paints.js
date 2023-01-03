import { getPaint, setPaint } from "./database.js";
const paintArray = getPaint()

export const paints = () => {
    
    let html = `<h2>Paints</h2>`
    html += `<select id = "paints">`
    html += `<option value = "0">select an paint package</option>`

    for ( const paint of paintArray ){
        html += `<option value ="${paint.id}">${paint.paintColor}</option>`
    }
    html += `</select>`
    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paints") {
            const chosenOption = changeEvent.target.value
            for ( const paint of paintArray ){
                if (parseInt(chosenOption) === paint.id){
                    setPaint(parseInt(changeEvent.target.value))
                }
            }
        }
    }
)