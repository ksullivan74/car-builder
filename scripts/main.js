import { technologies } from "./technologies.js"
import { interiors } from "./interiors.js"
import { paints } from "./paints.js"
import { wheels } from "./wheels.js"
import { Orders } from "./orders.js"
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)


export const carsRUs = () => {
    return `
<h1>CARS!</h1>
<article class="">
    <section class="">
        ${technologies()}
    </section>
    <section class="">
        ${interiors()}
    </section>
    <section class="">
        ${paints()}
    <section class="">
        ${wheels()}
    </section>
    <article>
        <button id="orderButton">Create Order</button>
    </article>
    <section>
        ${Orders()}
    </section>
</article>

<article class="">
    <h2></h2>
    
</article>
`
}