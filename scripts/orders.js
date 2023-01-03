import { getInterior } from "./database.js"
import { getPaint } from "./database.js"
import { getWheels } from "./database.js"
import { getTechnology } from "./database.js"
import { getOrders } from "./database.js"


const buildOrderListItem = (order) => {

    const interiors = getInterior()
    const paints = getPaint()
    const wheels =  getWheels()
    const technology = getTechnology()

    // Remember that the function you pass to find() must return true/false
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )

    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )

    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelsId
        }
    )

    const foundTechnology = technology.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )

    const totalCost = foundInterior.price + foundPaint.price + foundTechnology.price + foundWheels.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    

    return `<li>
        Order #${order.id} cost ${costString}
    </li>`

}



export const Orders = () => {

    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    let listItems = orders.map(buildOrderListItem)

    html += listItems
    html += "</ul>"

    return html
}
