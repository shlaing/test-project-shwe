import type { Cart } from "../modules/Types"

export default function MiniCart({ cart }: { cart: Cart }) {
    return (
        <>
            <div className="navbar">
                <div className="dropdown" style={{ float: "right" }}>
                    <button className="dropbtn">My Cart ({cart.total})
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        {cart.items.length === 0 && <p>No items in cart</p>}
                        {cart.items.map(item => (
                            <div className="cart_item" key={item.productId.toString()}>
                                <div className="imageContainer">
                                    <img src={item.product?.imageURL} alt={item.product?.title} />
                                </div>
                                <div className="infoContainer">
                                    <p>{item.product?.title}</p>
                                    <p><strong>{item.quantity}</strong> x ${item.product?.price.toFixed(2)}</p>
                                    <p>Size: {item.size}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}