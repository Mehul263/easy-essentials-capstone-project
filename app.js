var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register(){
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}

function login(){
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0";
}

var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");

var addButtons = document.getElementsByClassName("button");

var items=[
    {
    name: "Shirts",
    quantity: 0,
    dollars: 34,
    cents: 99,
},
{
    name: "Pants",
    quantity: 0,
    dollars: 36,
    cents: 99,
},
{
    name: "Dresses",
    quantity: 0,
    dollars: 58,
    cents: 99,
},
{
    name: "Hoodies",
    quantity: 0,
    dollars: 49,
    cents: 99,
},
{
    name: "Coca Cola",
    quantity: 0,
    dollars: 19,
    cents: 99,
},
{
    name: "Cereal",
    quantity: 0,
    dollars: 5,
    cents: 99,
},
{
    name: "Milk",
    quantity: 0,
    dollars: 3,
    cents: 50,
},
{
    name: "Connect 4",
    quantity: 0,
    dollars: 12,
    cents: 99,
},
{
    name: "Jenga",
    quantity: 0,
    dollars: 19,
    cents: 99,
},
{
    name: "Monopoly",
    quantity: 0,
    dollars: 24,
    cents: 99,
},
{
    name: "Dart Board",
    quantity: 0,
    dollars: 19,
    cents: 99,
},
{
    name: "Bread",
    quantity: 0,
    dollars: 2,
    cents: 50,
},
];

function updateCart() {
    let cart = 0;
    for (index = 0; index < items.length; index++){
        cart = cart + items[index].quantity;
    }
    cartValue.innerHTML=cart;
}

for (let i = 0; i < addButtons.length;i++){
    addButtons[i].onclick = (e) => {
       items[i].quantity++;
        updateCart();
        };
}

var finalDollars = 0;
var finalCents = 0;

function updatePrice() {
    let totalPriceInCents = 0;

    for(index = 0; index < items.length; index++){
        totalPriceInCents=totalPriceInCents + items[index].quantity * (items[index].dollars * 100 + items[index].cents)
    }
    finalDollars = Math.floor(totalPriceInCents / 100);
    finalCents = totalPriceInCents % 100;
}

var whatsappLink = 
"https://api.whatsapp.com/send?phone=919000000000&text=Order%20details";


function updateWhatsappLink() {
    for(let index = 0; index < items.length; index++){
        if (items[index].quantity != 0) {
          whatsappLink += "%0A" + items[index].name + "%20" + items[index].quantity;   
    }
}
whatsappLink += 
"%0A" + "Total%20Price:%20$" + finalDollars + "%20" + finalCents + "c";
}

cartButton.onclick = () => {
    updatePrice();
    updateWhatsappLink();
    window.open(whatsappLink, "_blank");
};

