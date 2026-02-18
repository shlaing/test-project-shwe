type Product = {
    total: number;
    id: number;
    title: string;
    description: string;
    price: number;
    imageURL: string;
    sizeOptions: {
        id: number;
        label: string;
    }[];
    items: CartItem[];
}

type CartItem = {
    size: string;
    product: any;
    customerId: number;
    productId: number;
    sizeId: number;
    quantity: number;
}

type Cart = {
    items: CartItem[];
    total: number;
}

type AddToCart = {
    customerId: number;
    productId: number;
    size: string;
    quantity: number;
}

export type { Product, CartItem, Cart, AddToCart };
