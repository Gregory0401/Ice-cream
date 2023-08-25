const refs = {
  openSpecial: document.querySelector(".special"),
  openVegan: document.querySelector(".vegan"),
  openFine: document.querySelector(".fine"),
};

refs.openSpecial.addEventListener("click", () => {
  loadMore2();
  special();
});
refs.openVegan.addEventListener("click", () => {
  loadMore3();
  vegan();
});
refs.openFine.addEventListener("click", () => {
  loadMore();
  fine();
});

let basket = JSON.parse(localStorage.getItem("data")) || [];

let page = 1;
let limit = 6;
const totalPages = 6 / limit;

function loadMore() {
  const loadMore = document.querySelector(".loadMore");
  loadMore.innerHTML = `<button onclick="fineLoadMore()" class="btn_lm">Load more</button>`;
}
function loadMore2() {
  const loadMore = document.querySelector(".loadMore");
  loadMore.innerHTML = `<button onclick="specialLoadMore()" class="btn_lm">Load more</button>`;
}
function loadMore3() {
  const loadMore = document.querySelector(".loadMore");
  loadMore.innerHTML = `<button onclick="veganLoadMore()" class="btn_lm">Load more</button>`;
}

function fineLoadMore() {
  fetchModels()
    .then((shop) => {
      fetchModels2(shop);
      page += 1;
    })
    .catch((error) => console.log(error));
}

function fine() {
  fetchModels()
    .then((shop) => {
      fetchModels2(shop);
    })
    .catch((error) => console.log(error));
}
async function fetchModels() {
  const params = new URLSearchParams({
    _limit: limit,
    _page: page,
  });

  let res = await fetch(
    `https://my-json-server.typicode.com/Gregory0401/data/fine-desserts?${params}`
  );
  return res.json();
}

function fetchModels2(shops) {
  const list = document.querySelector(".list");

  const newTechnologies = shops;

  const markup = newTechnologies
    .map((user) => {
      let { id, name, price, image } = user;
      return `
<li class="models" id=product-id-${id}>
<div class="img">
<img src=${image}  width="150" height="120" />
</div>
<p class="list-item new">${name}</p>
<p class="list-item new">${price} грн</p>
<button onclick="pushCart(${id},${price},'${name}')" class="btn_add">Add to cart</button>
</li>
`;
    })
    .join("");

  list.insertAdjacentHTML("beforeend", markup);
}

function specialLoadMore() {
  fetchSpecial()
    .then((shop) => {
      fetchSpecial2(shop);
      page += 1;
    })
    .catch((error) => console.log(error));
}

function special() {
  fetchSpecial()
    .then((shop) => {
      fetchSpecial2(shop);
    })
    .catch((error) => console.log(error));
}

async function fetchSpecial() {
  const params = new URLSearchParams({
    _limit: limit,
    _page: page,
  });
  let res = await fetch(
    `https://my-json-server.typicode.com/Gregory0401/data/special?${params}`
  );
  return res.json();
}

function fetchSpecial2(shop) {
  const list = document.querySelector(".list-special");
  const newTechnologies = shop;

  const markup = newTechnologies
    .map((user) => {
      let { id, name, price, image } = user;
      return `
<li class="models">
<div class="img">
<img src=${image}  width="150" height="150" />
</div>
<p class="list-item new">${name}</p>
<p class="list-item new">${price} грн</p>
<button onclick="pushCart(${id},${price},'${name}')" class="btn_add">Add to cart</button>
</li>
`;
    })
    .join("");

  list.insertAdjacentHTML("beforeend", markup);
}

function veganLoadMore() {
  fetchVegan()
    .then((shop) => {
      fetchVegan2(shop);
      page += 1;
    })
    .catch((error) => console.log(error));
}

function vegan() {
  fetchVegan()
    .then((shop) => {
      fetchVegan2(shop);
    })
    .catch((error) => console.log(error));
}

async function fetchVegan() {
  const params = new URLSearchParams({
    _limit: limit,
    _page: page,
  });
  let res = await fetch(
    `https://my-json-server.typicode.com/Gregory0401/data/vegan?${params}`
  );
  return res.json();
}

function fetchVegan2(shop) {
  const list = document.querySelector(".list-vegan");
  const newTechnologies = shop;

  const markup = newTechnologies
    .map((user) => {
      let { id, name, price, image } = user;

      return `
        <li class="models">
        <div class="img">
        <img src=${image}  width="150" height="150" />
        </div>
        <p class="list-item new">${name}</p>
        <p class="list-item new">${price} грн</p>
        <button onclick="pushCart(${id},${price},'${name}')" class="btn_add">Add to cart</button>      
        </li>
        `;
    })

    .join("");

  list.insertAdjacentHTML("beforeend", markup);
}

let pushCart = (id, price, name) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);

  if (search === undefined) {
    basket.push({
      name: name,
      price: price,
      id: selectedItem,
      item: 1,
    });
  } else {
    search.item + 1;
  }

  const numberItemsCart = document.querySelector(".header_cart-number");
  const numberCart = (numberItemsCart.innerHTML = "!");
  basket.length > 0 && numberCart;

  localStorage.setItem("data", JSON.stringify(basket));
};
