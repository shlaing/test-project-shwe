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
                        {cart.items.map(item => (
                            <div className="cart_item" key={item.productId.toString()}>
                                <div className="imageContainer">
                                    <img src={item.toremove_product?.imageURL} alt={item.toremove_product?.title} />
                                </div>
                                <div className="infoContainer">
                                    <p>{item.toremove_product?.title}</p>
                                    <p><strong>{item.quantity}</strong> x ${item.toremove_product?.price.toFixed(2)}</p>
                                    <p>Size: {item.toremove_product?.sizeOptions.find(size => size.id === item.sizeId)?.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}