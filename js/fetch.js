const refs = {
    openSpecial: document.querySelector(".special"),  
    openVegan: document.querySelector(".vegan"),
    openFine: document.querySelector(".fine"),

  };

  refs.openSpecial.addEventListener("click", special);
  refs.openVegan.addEventListener("click", vegan);
  refs.openFine.addEventListener("click", fine);



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
.map((user) => `
<li class="models">
<div class="img">
<img src=${user.image}  width="150" height="120" />
</div>
<p class="list-item new">${user.name}</p>
<p class="list-item new">${user.price} грн</p>

</li>
`
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
      .map((user) => `
      <li class="models">
      <div class="img">
      <img src=${user.image}  width="150" height="150" />
      </div>
      <p class="list-item new">${user.name}</p>
      <p class="list-item new">${user.price} грн</p>
      
      </li>
      `
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
      .map((user) => `
      <li class="models">
      <div class="img">
      <img src=${user.image}  width="150" height="150" />
      </div>
      <p class="list-item new">${user.name}</p>
      <p class="list-item new">${user.price} грн</p>
      
      </li>
      `
    )
      .join("");
    
    list.insertAdjacentHTML("beforeend", markup);      
        })
        
        .catch(error =>{
            alert('errorrr')
        })
   }
    

        
    





    

    