'use strict';

var allOrders = [];
var handlerPush = [];
var el = document.getElementById('order-form');
var newOrders;
var dropdown = document.getElementById('products');

function Orders(prod, quant, cCard, user, address, city, state, zipC, phone){
  this.prod = prod;
  this.quant = quant;
  this.cCard = cCard;
  this.user = user;
  this.address = address;
  this.city = city;
  this.state = state;
  this.zipC = zipC;
  this.phone = phone;
  this.img = 'img/' + this.prod + '.jpg';
  allOrders.push(this);
}

var testStorage = function() {
  if (localStorage.data) {
    allOrders = JSON.parse(localStorage.data);
  } else {
    console.log('lalalocal storage');
  }
};

function createOrder(event){
  event.preventDefault();
  var prod = products.options[products.selectedIndex].value;
  var quant = event.target.quant.value;
  var cCard = event.target.cCard.value;
  var user = event.target.user.value;
  var address = event.target.address.value;
  var city = event.target.city.value;
  var state = event.target.state.value;
  var zipC = event.target.zipC.value;
  var phone = event.target.phone.value;

  new Orders(prod, quant, cCard, user, address, city, state, zipC, phone);

  localStorage.setItem('data', JSON.stringify(allOrders));

  event.target.quant.value = null;
  event.target.cCard.value = null;
  event.target.user.value = null;
  event.target.address.value = null;
  event.target.city.value = null;
  event.target.state.value = null;
  event.target.zipC.value = null;
  event.target.phone.value = null;
}

// testStorage();

el.addEventListener('submit', createOrder);
