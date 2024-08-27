import { Category, Product, User } from "./models";

const user = new User({
    name: 'John',
    lastname: 'Doe',
    birthdate: new Date('1990-01-01'),
    email: 'johndoe@example.com',
    isAdmin: false,
});

const category = new Category({
    name: 'Electronics',
    description: 'Devices and gadgets',
    products: []
});

const product = new Product({
    name: 'Laptop',
    description: 'A high-end gaming laptop',
    amount: 5,
    price: 1500.00,
    ownerId: '',
    image: 'laptop.jpg',
});


export const syncDatabase = async () => {
    // try {
    //     const newUser = await user.save();
    //     product.ownerId = newUser.id
    //     await product.save();
    //     await category.save();
    //     console.log("Database synchronized")
    // } catch (error) {
    //     console.error(error)
    // }
}