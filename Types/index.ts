import products from './products'

let productName: string = 'fanny pack'
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = '123 Hawthorne Horizon, New York 34925';

let product = products.find((productObject) => {
  if (productObject.name === productName) {
    return productObject
  }
})
if (product && product.preOrder === 'true') {
  console.log(`Your order is on pre-order. We will send you a message when it is on it's way!`)
}
if (product && Number(product.price) > 25) {
  shipping = 0;
  console.log('Your item receives free shipping!');
} else {
  shipping = 5;
}
shippingAddress.match('New York') ? taxPercent = .1 : taxPercent = .05
if (product) {
  taxTotal = (Number(product.price) * taxPercent)
  total = taxTotal + Number(product.price) + shipping
  console.log('Product: ', product.name)
  console.log('Address', shippingAddress)
  console.log('Product Price: ', Number(product.price).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  }))
  console.log('Tax: $', taxTotal.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  }))
  console.log('Shipping: $', shipping.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  }))
  console.log('Total: $', total.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  }))
} else {
  console.log('Selected item is no longer available or there seems to be an error. Please contact customer service.')
}

