import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Shayan',
            email: 'shayanali4@live.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin:true,
        },
        {
            name: 'Shaheer',
            email: 'shaheer@live.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin:false,
        },
    ],
    products: [
        {
            name: "Nike Slim Shirts",
            catagory: "Shirts",
            images: '/images/products/p1.jpg',
            price: 120,
            countInStock:10,
            brand: "Nike",
            rating: 4.5,
            numReviews: 10,
            description: "high quality product",
        },
        {
            name: "Adidas Fit Shirts",
            catagory: "Shirts",
            images: '/images/products/p2.jpg',
            price: 100,
            countInStock:15,
            brand: "Adidas",
            rating: 4,
            numReviews: 10,
            description: "high quality product",
        },
        {
            name: "Lacoste Free Shirts",
            catagory: "Shirts",
            images: '/images/products/p3.jpg',
            price: 220,
            countInStock:0,
            brand: "Lacoste",
            rating: 4.8,
            numReviews: 17,
            description: "high quality product",
        },
        {
            name: "Nike Slim Pants",
            catagory: "Pants",
            images: '/images/products/p4.jpg',
            price: 78,
            countInStock:50,
            brand: "Nike",
            rating: 3.8,
            numReviews: 20,
            description: "high quality product",
        },
        {
            name: "Puma Slim Pants",
            catagory: "Pants",
            images: '/images/products/p5.jpg',
            price: 65,
            countInStock:10,
            brand: "Puma",
            rating: 4.5,
            numReviews: 10,
            description: "high quality product",
        },
        {
            name: "Adida Slim Pants",
            catagory: "Pants",
            images: '/images/products/p6.jpg',
            price: 139,
            countInStock:25,
            brand: "Adidas",
            rating: 4.5,
            numReviews: 15,
            description: "high quality product",
        },
    ]
};
export default data;