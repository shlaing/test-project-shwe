import { Router, Request, Response } from "express"
import { getProductById } from "../services/product.service"

const router = Router()

router.get("/:id", async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params
    const product = await getProductById(Number(id))
    if (product != null) {
        res.json(product)
    } else {
        res.status(404).json(null)
    }
})

export default router
