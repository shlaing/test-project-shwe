import MiniCart from '../components/MiniCart'
import { useEffect, useState } from 'react';
import type { Product, Cart, AddToCart } from '../modules/Types';
import { getProductById, addingToCart, getCart } from '../modules/Services';

export default function ProductDetailPage() {

    const fixedCustomerId = 1;
    const fixedProductId = 2;

    const [cart, setCart] = useState<Cart>({
        items: [],
        total: 0
    });
    const [product, setProduct] = useState<Product | null>(null);
    const [selectedSize, setSelectedSize] = useState<string>("")
    const [sizeError, setSizeError] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        // @todo get customer guest id if available
        // @todo create customer browser unique guest session id and store to localStorage
        getProductById(fixedProductId).then(data => setProduct(data)).catch(_error => setError(true)).finally(() => setLoading(false))
        getCart(fixedCustomerId).then(data => setCart({ items: data.items, total: data.total })).catch(_error => setError(true)).finally(() => setLoading(false))
    }, [])

    const fnAddToCart = (addToCart: AddToCart) => {
        console.log(addToCart)

        if (addToCart.size == "") {
            setSizeError(true)
        }
        else {
            addingToCart(addToCart).then(_data => {
                getCart(fixedCustomerId).then(data => setCart({ items: data.items, total: data.total })).catch(_error => setError(true)).finally(() => setLoading(false))
            }).catch(_error => setError(true))

            // setCart((prevCart) => {
            //     const isExist = prevCart.items.find(item => item.productId === addToCart.productId && item.sizeId === addToCart.sizeId)
            //     if (isExist) {
            //         return {
            //             items: prevCart.items.map(item => item.productId === addToCart.productId && item.sizeId === addToCart.sizeId ? { ...item, quantity: item.quantity + addToCart.quantity } : item),
            //             total: prevCart.total + addToCart.quantity
            //         }
            //     }
            //     else {
            //         return {
            //             items: [...prevCart.items, { toremove_product: product, customerId: addToCart.customerId, productId: addToCart.productId, sizeId: addToCart.sizeId, quantity: addToCart.quantity }],
            //             total: prevCart.total + addToCart.quantity
            //         }
            //     }
            // })
        }
    }

    const fnChooseSize = (size: string) => {

        if (sizeError) { setSizeError(false) }
        setSelectedSize(size)
    }

    return (
        <div className="container">
            <MiniCart cart={cart} />
            {product && (
                <div className="productSection">
                    <div className="imageContainer">
                        <img src={product.imageURL} alt={product.title} />
                    </div>

                    <div className="infoContainer">
                        <h1>{product.title}</h1>
                        <hr />
                        <p className="price">${product.price.toFixed(2)}</p>
                        <hr />
                        <p className="description">
                            {product.description}
                        </p>

                        <p>Size<span className="required">*</span></p>

                        {product.sizeOptions.map(size => (
                            <button className="sizeButton"
                                key={size.id} value={size.id}
                                style={{ backgroundColor: selectedSize === size.label ? "#000" : "#fff", color: selectedSize === size.label ? "#fff" : "#000" }}
                                onClick={() => fnChooseSize(size.label)}>{size.label}</button>
                        ))}

                        {sizeError && <p className="errorMessage">Please choose a size</p>}

                        <div className="addToCartButtonSection">
                            <button className="addToCartButton" onClick={() => {
                                fnAddToCart(
                                    {
                                        customerId: 1,
                                        productId: product.id,
                                        size: selectedSize,
                                        quantity: 1
                                    }
                                )
                            }}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            )}
            {error && <p className="errorMessage">Something went wrong</p>}
            {loading && <p>Loading...</p>}
        </div>
    )
}