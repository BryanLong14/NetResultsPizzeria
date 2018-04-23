const API = "https://59b6v76zci.execute-api.us-west-2.amazonaws.com/nr/example";

document.getElementById("get-data").addEventListener("click", getData);

function getData() {
  console.log("TESTING");
  fetch(API, {
    mode: "cors",
    headers: new Headers({
      "Content-Type": "application/JSON"
    })
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      let result = "<h2>Pizza Order</h2>";
      result += `<h3>Order ID: ${data.order_id}</h3>
        <h4>Size: ${data.size}</h4>`;
    })
    .catch(err => console.log(err));
}
