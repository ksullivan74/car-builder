import { getWheels, setWheels } from "./database.js";
const wheelsArray =  getWheels()

export const wheels = () => {
    
    let html = `<h2>Wheels</h2>`
    html += `<select id = "wheels">`
    html += `<option value = "0">select an wheel package</option>`

    for ( const wheel of wheelsArray ){
        html += `<option value ="${wheel.id}">${wheel.wheelType}</option>`
    }
    html += `</select>`
    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
            const chosenOption = changeEvent.target.value
            for ( const wheel of wheelsArray ){
                if (parseInt(chosenOption) === wheel.id){
                    setWheels(parseInt(changeEvent.target.value))
                }
            }
        }
    }
)