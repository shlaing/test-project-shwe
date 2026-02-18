import express, { Request, Response } from "express"
import cors from "cors"
import productRoutes from "./routes/product.routes"
import cartRoutes from "./routes/cart.routes"
import logger from "./middleware/logger"
import { allow_cors } from "./config"
import { seedProducts } from "./seed"

const app = express()
const port: number = 3000;

app.use(cors({ origin: allow_cors }))
app.use(express.json())
app.use(logger)

app.use("/products", productRoutes)
app.use("/carts", cartRoutes)

app.get("/", (req: Request, res: Response): void => {
    res.send(`Heartbeat ... OK`)
})

app.listen(port, async () => {
    await seedProducts()
    console.log(`Server is running on port ${port}`)
})