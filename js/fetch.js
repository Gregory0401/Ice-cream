const refs = {
    openSpecial: document.querySelector(".special"),  
    openVegan: document.querySelector(".vegan"),
    openFine: document.querySelector(".fine"),
  };

  refs.openSpecial.addEventListener("click", special);
  refs.openVegan.addEventListener("click", vegan);
  refs.openFine.addEventListener("click", fine);

  let basket = JSON.parse(localStorage.getItem("data")) || [];



  function fine(){
    async function fetchModels(){
      let res = await fetch ('https://my-json-server.typicode.com/Gregory0401/data/fine-desserts')
      return res
    }
  
    fetchModels()
  .then(res=>{
  return res.json()
  })
  .then(shops=>{
const list = document.querySelector(".list");
const newTechnologies = shops;

const markup = newTechnologies
.map((user) => {
  let {id, name, price, image} = user;
return`
<li class="models" id=product-id-${id}>
<div class="img">
<img src=${image}  width="150" height="120" />
</div>
<p class="list-item new">${name}</p>
<p class="list-item new">${price} грн</p>
<button onclick="pushCart(${id},${price},'${name}')" class="btn_add">Add to cart</button>
</li>
`
}

)
.join("");
list.insertAdjacentHTML("beforeend", markup);      
  })
  .catch(error =>{
      alert('errorrr')
  })  
  
  }
  
        
   function special() {
    async function fetchModels(){
        let res = await fetch ('https://my-json-server.typicode.com/Gregory0401/data/special')
        return res}
        
        fetchModels()
        .then(res=>{
        return res.json()
        })
        .then(shops=>{
    const list = document.querySelector(".list-special");
    const newTechnologies = shops;
    
    const markup = newTechnologies
      .map((user) => {
        let {id, name, price, image} = user;
return `
<li class="models">
<div class="img">
<img src=${image}  width="150" height="150" />
</div>
<p class="list-item new">${name}</p>
<p class="list-item new">${price} грн</p>
<button onclick="pushCart(${id},${price},'${name}')" class="btn_add">Add to cart</button>
</li>
`
      }
      
    )
      .join("");
    
    list.insertAdjacentHTML("beforeend", markup);      
        })
        
        .catch(error =>{
            alert('errorrr')
        })
   };

  

   function vegan(){
    async function fetchModels(){
        let res = await fetch ('https://my-json-server.typicode.com/Gregory0401/data/vegan')
        return res}
        
        fetchModels()
        .then(res=>{
        return res.json()
        })
        .then(shops=>{
    const list = document.querySelector(".list-vegan");
    const newTechnologies = shops;
     
    const markup = newTechnologies
      .map((user) => {
        let {id, name, price, image} = user;

        return `
        <li class="models">
        <div class="img">
        <img src=${image}  width="150" height="150" />
        </div>
        <p class="list-item new">${name}</p>
        <p class="list-item new">${price} грн</p>
        <button onclick="pushCart(${id},${price},'${name}')" class="btn_add">Add to cart</button>      
        </li>
        `
      })
      
      .join("");
    
    list.insertAdjacentHTML("beforeend", markup);      
        })     
        .catch(error =>{
            alert('errorrr')
        })
   }


   let pushCart = (id,price,name) =>{
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem);

  if (search === undefined) {
    
    basket.push({
      name:name,
      price:price,
      id: selectedItem,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  console.log(basket);

  localStorage.setItem("data", JSON.stringify(basket));
  };
  
  