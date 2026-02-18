import prisma from "../prisma";

export interface Product {
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

export async function getProductById(id: number): Promise<Product | null> {
    return prisma.product.findUnique({
        where: { id },
        include: { sizeOptions: true },
    });
}