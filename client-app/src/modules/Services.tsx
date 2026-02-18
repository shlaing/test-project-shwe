import type { Product, AddToCart } from "./Types";
import config from "../config";

function getProductById(id: number): Promise<Product> {
    return fetch(`${config.API_URL}/products/${id}`)
        .then(res => res.json())
}

function getCart(customerId: number): Promise<Product> {
    return fetch(`${config.API_URL}/carts/${customerId}`)
        .then(res => res.json())
}

function addingToCart(addToCart: AddToCart): Promise<Product> {
    return fetch(`${config.API_URL}/carts/addToCart`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(addToCart)
    })
        .then(res => res.json())
}

export { getProductById, getCart, addingToCart }