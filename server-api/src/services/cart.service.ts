import prisma from "../prisma";

export interface Cart {
    id: number;
    customerId: number;
    productId: number;
    size: string;
    quantity: number;
}

export function getCartByCustomerId(customerId: number): Promise<Cart[]> {
    return prisma.cartItem.findMany({
        where: { customerId },
        include: {
            product: true,
        },
    });
}

export function addToCart(customerId: number, productId: number, size: string, quantity: number): Promise<Cart> {
    return prisma.cartItem.upsert({
        where: {
            customerId_productId_size: {
                customerId,
                productId,
                size,
            },
        }, update: {
            quantity: {
                increment: quantity,
            },
        }, create: {
            customerId,
            productId,
            size,
            quantity,
        },
    });
}

