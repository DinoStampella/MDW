// import { Category, Product, User } from "./models";

// const user = new User({
//   name: "Dario",
//   lastName: "Maranes",
//   birthdate: new Date("1990-10-10"),
//   email: "dariomaranes@gmail.com",
//   isAdmin: false,
// });

// const product = new Product({
//   name: "computer",
//   description: "m3",
//   amount: 5,
//   price: 1500,
//   ownerId: "",
//   image: "computer.jpg",
// });

// const category = new Category({
//   name: "electronics",
//   description: "electronics",
//   products: [],
// });

// export const syncDatabase = async () => {
//   try {
// const newUser = await user.save()
// product.ownerId = newUser.id;
// await product.save()
// await category.save()
//     console.log("Database synchronized 🟢");
//   } catch (error) {
//     console.error(error);
//   }
// };
