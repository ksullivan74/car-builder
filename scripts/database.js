const dataBase = {
   paint: [
    {id: 1, paintColor: "Silver", price: 500},
    {id:2, paintColor: "Midbight Blue", price: 500},
    {id: 3, paintColor: "Fire Brick Red", price: 700},
    {id:4, paintColor: "Spring Green", price: 800}
    ],
    interior: [
        {id: 1, fabric: "Beige Fabric", price: 600},
        {id:2, fabric: "Charcoal Fabric", price: 600},
        {id: 3, fabric: "White Leather", price: 900},
        {id:4, fabric: "Black Leather", price: 900}
    ],
    technology: [
        {id: 1, techPackage: "Basic Package", price: 750},
        {id:2, techPackage: "Navigation Package", price: 750},
        {id: 3, techPackage: "Visibility Package",price: 750},
        {id:4, techPackage: "Ultra Package", price: 1000}
    ],
    wheels: [
        {id: 1, wheelType: "17 inch Pair Radial", price: 1600},
        {id:2, wheelType: "17 inch Pair Radial Black", price: 1700},
        {id: 3, wheelType: "18 inch Pair Spoke Silver", price: 2200},
        {id:4, wheelType: "18 inch Pair Spoke Black", price: 2350}
    ],
    customOrders: [],
    orderBuilder: {
        id: 1,
        paintID: null,
        interiorID: null,
        technologyID: null,
        wheelsId: null,
        timestamp: null
    }
}

export const getPaint = () => {
    return dataBase.paint.map(paint => ({...paint}))
}

export const getInterior = () => {
    return dataBase.interior.map(interior => ({...interior}))
}

export const getTechnology = () => {
    return dataBase.technology.map(technology => ({...technology}))
}

export const getWheels = () => {
    return dataBase.wheels.map(wheels => ({...wheels}))
}

export const getOrders = () => {
    return dataBase.customOrders.map(order => ({...order}))
}

export const setPaint = (id) =>{
    return dataBase.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    return dataBase.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    return dataBase.orderBuilder.technologyId = id
}

export const setWheels = (id) => {
    return dataBase.orderBuilder.wheelsId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...dataBase.orderBuilder}

    // Add a new primary key to the object
    //const lastIndex = dataBase.customOrders.length - 1
    newOrder.id = dataBase.orderBuilder.id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    dataBase.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    dataBase.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}