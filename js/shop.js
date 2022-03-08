// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for(let i = 0; i < products.length; i++){
        //Le pongo un condicional, que dice que si, i, de la propiedad del array id es igual al id del parametro lo pushee a cartList
        if(products[i].id === id) {
            cartList.push(products[i])
        }
    }
    // console.log(cartList);
    
}

// Exercise 2
//limpiar
function cleanCart() {
    cartList = []
    cart = []
    total = 0
    console.log(cartList);
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    for(let i = 0; i < cartList.length; i++){
        //cambio la variable total sumando el total del
    total = cartList[i].price + total
}
console.log(total);
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    for (let i = 0; i < cartList.length; i++) {
        //buscar si existe el elemento en cart
        const foundIndex = cart.findIndex((cartItem) => {
           return cartList[i].name === cartItem.name
        });
        if (foundIndex === -1) {
            //object.assign sirve para modificar propiedades en el array
            const item = Object.assign({}, cartList[i], { quantity: 1, subtotal: cartList[i].price} );
            cart.push(item)
        } else {
          cart[foundIndex].quantity++;
          cart[foundIndex].subtotal += cartList[i].price
        }
    }
  console.log(cart);
  
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (let i = 0; i < cart.length; i++) {
        
        if(cart[i].quantity >= 3 && cart[i].name === 'cooking oil'){
            cart[i].subtotalWithDiscount = 10 * cart[i].quantity;     
        }
        else if (cart[i].type === 'grocery' && cart[i].quantity >= 10) {
            cart[i].subtotalWithDiscount = parseFloat((cart[i].subtotal * 2 / 3).toFixed(2));
        }
    }
    console.log(cart);
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 9
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}
