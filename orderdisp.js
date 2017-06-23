'usestrict';
// alert('working');

var theGoods = JSON.parse(localStorage.getItem('data'));
var theTable = document.getElementById('tableLAtabel');

function makeTable(){
  for(var i = 0; i < theGoods.length; i++){
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = 'Customer Order Info';
    trEl.appendChild(thEl);
    var thEla = document.createElement('th');
    var prodPic = document.createElement('img');
    prodPic.src = theGoods[i].img;
    thEla.appendChild(prodPic);
    trEl.appendChild(thEla);
    theTable.appendChild(trEl);
  }
}

function innerTableOne(){
  for(var i = 0; i < theGoods.length; i++){
    var trEl = document.createElement('tr');
    var tdEla = document.createElement('td');
    // var prodPic = document.createElement('img');
    // prodPic.src = theGoods[i].img;
    // tdEla.appendChild(prodPic);
    // trEl.appendChild(tdEla);
    var tdElb = document.createElement('td');
    tdElb.textContent = 'Phone Number: ' + theGoods[i].phone;
    trEl.appendChild(tdElb);
  }
  theTable.appendChild(trEl);
}

function innerTable(){
  for(var i = 0; i < theGoods.length; i++){
    var trEl = document.createElement('tr');
    var tdEla = document.createElement('td');
    tdEla.textContent = 'Product: ' + theGoods[i].prod;
    trEl.appendChild(tdEla);
    var tdElb = document.createElement('td');
    tdElb.textContent = 'Quantity: ' + theGoods[i].quant;
    trEl.appendChild(tdElb);
  }
  theTable.appendChild(trEl);
}

function moreTable(){
  for(var i = 0; i < theGoods.length; i++){
    var trEl = document.createElement('tr');
    var tdEla = document.createElement('td');
    tdEla.textContent = 'Credit Card: ' + theGoods[i].cCard;
    trEl.appendChild(tdEla);
    var tdElb = document.createElement('td');
    tdElb.textContent = 'Customer Name: ' + theGoods[i].user;
    trEl.appendChild(tdElb);
  }
  theTable.appendChild(trEl);
}

function evenMoreTable(){
  for(var i = 0; i < theGoods.length; i++){
    var trEl = document.createElement('tr');
    var tdEla = document.createElement('td');
    tdEla.textContent = 'Address: ' + theGoods[i].address;
    trEl.appendChild(tdEla);
    var tdElb = document.createElement('td');
    tdElb.textContent = 'City: ' + theGoods[i].city;
    trEl.appendChild(tdElb);
  }
  theTable.appendChild(trEl);
}

function closeBottomTable(){
  for(var i = 0; i < theGoods.length; i++){
    var trEl = document.createElement('tr');
    var tdEla = document.createElement('td');
    tdEla.textContent = 'State: ' + theGoods[i].state;
    trEl.appendChild(tdEla);
    var tdElb = document.createElement('td');
    tdElb.textContent = 'Zip Code: ' + theGoods[i].zipC;
    trEl.appendChild(tdElb);
  }
  theTable.appendChild(trEl);
}

function theBigRender(){
  makeTable();
  innerTableOne();
  innerTable();
  moreTable();
  evenMoreTable();
  closeBottomTable();
}

theBigRender();
