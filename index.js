var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100) + 1;

  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  l = cart.length
  if (!l) {
    console.log('Your shopping cart is empty.')
  }

}

function total() {

}

function removeFromCart(item) {


}

function placeOrder(cardNumber) {

}
