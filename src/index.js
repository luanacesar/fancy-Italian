import "./styles.css";
import menu from "./menu";

const menuItems = menu.items;

// arrays of food types
let typesOfStarter = [];
let typesOfPasta = [];
let typesOfPizza = [];

//- In `index.js`, loop over `menuItems` and categorize them into sections based on each items assigned `type`
for (let i = 0; i < menuItems.length; i++) {
  if (menuItems[i].type === "pizza") {
    typesOfPizza.push(menuItems[i]);
  } else if (menuItems[i].type === "pasta") {
    typesOfPasta.push(menuItems[i]);
  } else {
    typesOfStarter.push(menuItems[i]);
  }
}
// ## 4. BONUS: Filtering
// - Add a checkbox to toggle spicy options. When the checkbox is checked, the spicy options should be visible. It should be checked by default.
// document.getElementById("myCheck").addEventListener("click", box);

// function box(typesOfPizza) {
//   var checkBox = document.getElementById("myCheck");
//   //var text = document.getElementById("text");
//   if (checkBox.checked) {
//     console.log(typesOfPizza);
//   }
//   typesOfPizza = typesOfPizza.filter((p) => p.spicy === true);
//   text.style.display = "block";
//   } else {
//     //text.style.display = "none";
//   }
// }

// - Sort the items in each category by their `menuOrder`
typesOfStarter.sort(function (firstOrder, secondOrder) {
  return firstOrder.menuOrder - firstOrder.menuOrder;
});

typesOfPasta.sort(function (firstOrder, secondOrder) {
  return firstOrder.menuOrder - firstOrder.menuOrder;
});

typesOfPizza.sort(function (firstOrder, secondOrder) {
  return firstOrder.menuOrder - firstOrder.menuOrder;
});

// Render the sorted results into the appropriate container with `index.html`
//Starter
typesOfStarter.map((starter, idx) => {
  let starter_name = document.createElement("h3");
  starter_name.textContent = starter.name;
  document.getElementById(`startersName${idx}`).appendChild(starter_name);

  let starter_desc = document.createElement("p");
  starter_desc.textContent = starter.description;
  document.getElementById(`desc${idx}`).appendChild(starter_desc);

  // Format any prices. For example, 8.5 becomes \$8.50
  let starter_price = document.createElement("p");
  starter_price.textContent = "$ " + starter.price.toFixed(2);
  document.getElementById(`pr${idx}`).appendChild(starter_price);

  //Render the "spicy" icon next to any menu items where `spicy` is `true`
  let spliceClass = starter.spicy ? "disclaimer spicy" : "";
  let spiceTag = document.getElementById(`sp${idx}`);
  spiceTag.setAttribute("class", spliceClass);
  return starter;
});
//Pasta
typesOfPasta.map((pasta, idx) => {
  let nameOfPasta = document.createElement("h3");
  nameOfPasta.textContent = pasta.name;
  document.getElementById(`pastaName${idx}`).appendChild(nameOfPasta);

  let pasta_description = document.createElement("p");
  pasta_description.textContent = pasta.description;
  document.getElementById(`pastaDesc${idx}`).appendChild(pasta_description);

  // Format any prices. For example, 8.5 becomes \$8.50
  let pasta_price = document.createElement("p");
  pasta_price.textContent = "$ " + pasta.price.toFixed(2);
  document.getElementById(`pastaPrice${idx}`).appendChild(pasta_price);

  //Render the "spicy" icon next to any menu items where `spicy` is `true`
  let spliceClass = pasta.spicy ? "disclaimer spicy" : "";
  let spiceTag = document.getElementById(`pastaSpicy${idx}`);
  spiceTag.setAttribute("class", spliceClass);
  return pasta;
});

//Pizza
typesOfPizza.map((pizza, idx) => {
  let pizza_name = document.createElement("h3");
  pizza_name.textContent = pizza.name;
  document.getElementById(`pName${idx}`).appendChild(pizza_name);

  let pizza_desc = document.createElement("p");
  pizza_desc.textContent = pizza.description;
  document.getElementById(`pDesc${idx}`).appendChild(pizza_desc);

  // Format any prices. For example, 8.5 becomes \$8.50
  let pizza_price = document.createElement("p");
  pizza_price.textContent = "$ " + pizza.price.toFixed(2);
  document.getElementById(`pPrice${idx}`).appendChild(pizza_price);

  //Render the "spicy" icon next to any menu items where `spicy` is `true`
  let spliceClass = pizza.spicy ? "disclaimer spicy" : "";
  let spiceTag = document.getElementById(`pSpicy${idx}`);
  spiceTag.setAttribute("class", spliceClass);

  return pizza;
});
