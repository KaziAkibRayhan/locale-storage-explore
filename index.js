const addProduct = () => {
  const product = document.getElementById("product").value;
  const quantity = document.getElementById("quantity").value;
  addProductDB(product, quantity);
};

const getStoredCart = () => {
  const storedCart = localStorage.getItem("cart");
  let cart = {};
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const addProductDB = (product, quantity) => {
  const cart = getStoredCart();
  cart[product] = quantity;
  localStorage.setItem("cart", JSON.stringify(cart));
};
