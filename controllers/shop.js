const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then((products) => {
        res.json({products: products})
    //   res.render("shop/product-list", {
    //     prods: products,
    //     pageTitle: "All Products",
    //     path: "/products",
    //   });
    })
    .catch((err) => {
      console.log(err);
    });
};