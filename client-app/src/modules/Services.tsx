import type { Product, AddToCart } from "./Types";
import config from "../config";

function getProductById(id: number): Promise<Product> {
    return fetch(`${config.API_URL}/product/`) // Add "${id}"
        .then(res => res.json())
}

export { getProductById }

// function getCart(customerId: number): Promise<Product> {
//     return fetch(`${config.API_URL}/product/${customerId}`)
//         .then(res => res.json())
// }

// function addToCart(addToCart: AddToCart): Promise<Product> {
//     return fetch(`${config.API_URL}/product/`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(addToCart)
//     })
//         .then(res => res.json())
// }

// export { getProductById, getCart, addToCart }