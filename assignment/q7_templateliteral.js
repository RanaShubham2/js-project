
// Q17. Declare 5 constants for a product (name, price, stock, rating, inStock). Use a template literal to print a
// formatted product card.
const name='mobile'
const price = 12444
const stock= 123
const rating=4.5
const inStock = 'true'

console.log('product details:')
const p_details=`
product_name : ${name}
price : ${price}
stock : ${stock}
rating : ${rating}
inStock : ${inStock}
`
console.log(p_details)