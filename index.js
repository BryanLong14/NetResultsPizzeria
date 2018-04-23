const API = "https://59b6v76zci.execute-api.us-west-2.amazonaws.com/nr/example";
const API2 = "https://pure-refuge-52497.herokuapp.com/hole";
const output = document.getElementById("output");

fetch(API)
  .then(res => res.json())
  .then(res => {
    console.log(res);
    return res;
  })
  .then(displayOrderData)
  .catch(err => console.log(err));

function displayOrderData(data) {
  let order = data.order_id;
  let size = data.size;
  let crust = data.crust;
  let toppings = data.toppings.map(topping => {
    return `<h5>${topping.amount} ${topping.name}</h5>`;
  });
  return (output.innerHTML = `
  <h2>New Pizza Order Number: ${order}</h2>
  <h2>Size: ${size}</h2>
  <h2>Crust: ${crust}</h2>
  <h2>Toppings: ${toppings}</h2>`.replace(/\,/g, ""));
}
