document.onclick = event =>{
    
    if(event.target.classList.contains('btn_buy'))
    {generateCartItems()}

    }

function generateCartItems () {
const shoppingCart = document.querySelector(".cart_total");
let cart = JSON.parse(localStorage.getItem("data")) || [];

shoppingCart.innerHTML = cart.map((x)=>{
    const total = x.item*x.price;
    return `
    <li class="cart_item"> 
    <p class="cart_text">${x.name}</p>
    <p class="cart_text">Quantity: ${x.item}</p>
    <p class="cart_text">Price: ${total} грн</p>
    <div class="cart_buttons">
            <div class="buttons">
              <button onclick="decrement(${x.id})" class="btn_total">-</button>
              <div id=${x.id} class="quantity">${x.item}</div>
              <button onclick="increment(${x.id})" class="btn_total">+</button>
            </div>
          </div>
          <button onclick="remove(${x.id})" class="btn_remove">Delete</button>
    </li>
    `
})
.join("");
totalAmount()
  };
  
  function increment(id){
    const selectedItem = id;
    const search = basket.find((x) => x.id === selectedItem);   
    search.item += 1;   
    localStorage.setItem("data", JSON.stringify(basket));
    generateCartItems ();
    totalAmount();
  };

  function decrement (id){
    const selectedItem = id;
    const search = basket.find((x) => x.id === selectedItem);   
    if (search.item === 0) return;
    else{
        search.item -= 1;   
    }
    localStorage.setItem("data", JSON.stringify(basket));
    generateCartItems ();
    totalAmount()
  };


  function totalAmount(){
  const cart = JSON.parse(localStorage.getItem("data")) || [];
  const label = document.querySelector(".cart_label")
  const amount = cart.map((x)=>{
        return  x.item*x.price;
        
      })
      .reduce((x,y)=> x + y, 0);

    return (
        amount === 0 ? label.innerHTML = `` : label.innerHTML = `
        <h2>Total Bill: ${amount} грн</h2>
        <button onclick="clearCart()" class="clear_cart">Clear</button>
        `
    )
  };
 
  function clearCart(){
  localStorage.removeItem("data")
  generateCartItems ();
  }

  function remove(id){
    const selectedItem = id;
    basket = basket.filter((x) => x.id !== selectedItem);
    localStorage.setItem("data", JSON.stringify(basket));
    generateCartItems();
    totalAmount();
  }