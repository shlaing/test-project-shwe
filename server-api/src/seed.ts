import prisma from "./prisma"

export async function seedProducts() {
    const count = await prisma.product.count()
    if (count > 0) {
        console.log(`Seeding not required...`)
        return
    }

    await prisma.product.create({
        data: {
            title: "Classic Tee",
            description: "A timeless classic tee made from 100% organic cotton. Soft, breathable, and perfect for everyday wear.",
            price: 75,
            imageURL: "https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg",
            sizeOptions: {
                create: [
                    { label: "S" },
                    { label: "M" },
                    { label: "L" },
                ]
            }
        }
    })

    await prisma.product.create({
        data: {
            title: "Vintage Hoodie",
            description: "A cozy vintage-style hoodie with a relaxed fit. Features a front kangaroo pocket and adjustable drawstring hood.",
            price: 120,
            imageURL: "https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg",
            sizeOptions: {
                create: [
                    { label: "S" },
                    { label: "M" },
                    { label: "L" },
                    { label: "XL" },
                ]
            }
        }
    })

    await prisma.product.create({
        data: {
            title: "Slim Fit Jeans",
            description: "Modern slim fit jeans crafted from premium stretch denim. Comfortable all-day wear with a sleek silhouette.",
            price: 95,
            imageURL: "https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg",
            sizeOptions: {
                create: [
                    { label: "28" },
                    { label: "30" },
                    { label: "32" },
                    { label: "34" },
                ]
            }
        }
    })

    console.log("Seeding complete: 3 products created.")
}
