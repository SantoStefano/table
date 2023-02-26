

let data = {
  "orders": [
   {
     "order_number": 12345,
     "order_date": 1669867758,
     "order_rows": [
       {              
         "article": "Трико-1242",
         "brand": "abibas",
         "description": "хоросый кацество",
         "price": 600.25,
         "count": 2
       },
       {              
        "article": "Банан-0003",
        "brand": "Снова привет",
        "description": "Желтый, вкусный",
        "price": 20.80,
        "count": 10
      },
     ]
  },
  {
    "order_number": 12346,
    "order_date": 1669866905,
    "order_rows": [
      {              
        "article": "Сухарики-1647",
        "brand": "Кириешки",
        "description": "С икрой",
        "price": 150.25,
        "count": 1
      },
      {              
       "article": "Corolla-201456",
       "brand": "Toyota",
       "description": "Управляй мечтой",
       "price": 3000.25,
       "count": 6
     },
    ]
 },
 
 
  ]
  };


  
 for (let key in data.orders) {
  let rowMain = document.querySelector('.order').insertRow();
  let cellMain = rowMain.insertCell().innerHTML = `<b>Заказ № ${data.orders[key].order_number}/${getUserTime(new Date(data.orders[key].order_date*1000))}</b>`;
  let rowMain2 = document.querySelector('.order').insertRow();
  let cellMain2 = rowMain2.insertCell().innerHTML = `<b>Артикул</b>`;
  let cellMain3 = rowMain2.insertCell().innerHTML = `<b>Бренд</b>`;
  let cellMain4 = rowMain2.insertCell().innerHTML = `<b>Описание</b>`;
  let cellMain5 = rowMain2.insertCell().innerHTML = `<b>Цена</b>`;
  let cellMain6 = rowMain2.insertCell().innerHTML = `<b>Количество</b>`;
  let cellMain7 = rowMain2.insertCell().innerHTML = `<b>Общая сумма</b>`;

  
  let total = [];
  for (let key2 in data.orders[key].order_rows) {
    let row2 = document.querySelector('.order').insertRow();
    let cell2 = row2.insertCell().textContent = `${data.orders[key].order_rows[key2].article}`;
    let cell3 = row2.insertCell().textContent = `${data.orders[key].order_rows[key2].brand}`;
    let cell4 = row2.insertCell().textContent = `${data.orders[key].order_rows[key2].description}`;
    let cell5 = row2.insertCell().textContent = `${data.orders[key].order_rows[key2].price}`;
    let cell6 = row2.insertCell().textContent = `${data.orders[key].order_rows[key2].count}`;
    let cell7 = row2.insertCell().textContent = cell5*cell6;
    total.push(cell7);
  }
  let total2 = total.reduce((x,y)=>x+y,0);
  let rowTotal = document.querySelector('.order').insertRow();
  cellTotal = rowTotal.insertCell();
  cellTotal.className = 'text-right'; 
  cellTotal.setAttribute('colspan', 7);
  cellTotal.innerHTML = `Итого: <b><i>${total2}</i></b>`
 }

 
 
 

 function getUserTime(t) {
	let Y = t.getFullYear();
	let M = addLeadingZero(t.getMonth()+1);
	let D = addLeadingZero(t.getDate());
	let d = t.getDay();
	let h = addLeadingZero(t.getHours());
	let m = addLeadingZero(t.getMinutes());
	return  `${D}.${M}.${Y} ${h}:${m}`;
}

function addLeadingZero(d) {
	return (d<10) ? '0' + d : d;
}
  

  