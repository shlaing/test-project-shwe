import { Router, Request, Response } from "express"
import { getCartByCustomerId, addToCart } from "../services/cart.service"

const router = Router()

router.get("/:id", async (req: Request, res: Response): Promise<void> => {
    const customerId = parseInt(req.params.id)
    const cart = await getCartByCustomerId(customerId)
    let total = 0
    cart.forEach(item => {
        total += item.quantity
    })
    res.json({ msg: "cart items", items: cart, total: total })
})

router.post("/addToCart", async (req: Request, res: Response): Promise<void> => {
    const { customerId, productId, size, quantity } = req.body
    const cart = await addToCart(customerId, productId, size, quantity)
    res.status(201).json({ msg: "item added to cart", cart })
})

export default router