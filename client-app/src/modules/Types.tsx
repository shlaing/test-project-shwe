type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    imageURL: string;
    sizeOptions: {
        id: number;
        label: string;
    }[];
}

type CartItem = {
    customerId: number;
    productId: number;
    sizeId: number;
    quantity: number;
    toremove_product: Product | null;
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
