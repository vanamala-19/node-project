const data = [
  { "id": 1, "name": "BTC/INR", "last": "2426191.0", "buy": "2426191.0", "sell": "2426200.0", "volume": "8.95159", "base_unit": "btc" },
  { "id": 2, "name": "XRP/INR", "last": "43.0001", "buy": "43.445", "sell": "43.4499", "volume": "233554.7", "base_unit": "xrp" }, 
  { "id": 3, "name": "ETH/INR", "last": "162860.1", "buy": "162274.0", "sell": "162860.1", "volume": "85.9967", "base_unit": "eth" }, 
  { "id": 4, "name": "TRX/INR", "last": "5.6089", "buy": "5.6089", "sell": "5.6306", "volume": "1219818.0", "base_unit": "trx" }, 
  { "id": 5, "name": "EOS/INR", "last": "101.68", "buy": "101.01", "sell": "101.67", "volume": "1169.45", "base_unit": "eos" }, 
  { "id": 6, "name": "ZRX/INR", "last": "29.06", "buy": "29.06", "sell": "30.0", "volume": "89856.74", "base_unit": "zrx" }, 
  { "id": 7, "name": "REQ/INR", "last": "8.68", "buy": "8.56", "sell": "8.6799", "volume": "6111.0", "base_unit": "req" }, 
  { "id": 8, "name": "NULS/INR", "last": "108.0", "buy": "0.0", "sell": "0.0", "volume": "0.0", "base_unit": "nuls" }, 
  { "id": 9, "name": "ICX/INR", "last": "36.0", "buy": "35.511", "sell": "36.0", "volume": "163261.86", "base_unit": "icx" }, 
  { "id": 10, "name": "OMG/INR", "last": "133.5", "buy": "132.0", "sell": "133.5", "volume": "4096.23", "base_unit": "omg" }
]

var checked = true;
var t = 0;
const check = () => {
  checked = !checked;
  if (checked) {
    document.getElementById('theme').className = "theme-dark";
  } else {
    document.getElementById('theme').className = "theme-light";
  }
}
setInterval(function () {
  if (t == 0) {
    t = 61;
  }
  t--;
  var text = document.getElementById("text");
  text.innerHTML = `
    <svg
    class="CircularProgressbar"
    viewBox="0 0 100 100"
    data-test-id="CircularProgressbar"
    >
    <path
      class="CircularProgressbar-trail"
      d="M 50,50  m 0,-46  a 46,46 0 1 1 0,92  a 46,46 0 1 1 0,-92"
      stroke-width="8"
      fill-opacity="0"
      style="
        stroke-dasharray: 289.027px, 289.027px;
        stroke-dashoffset: 0px;
      "
    ></path>
    <path
      class="CircularProgressbar-path"
      d="M 50,50  m 0,-46  a 46,46 0 1 1 0,92  a 46,46 0 1 1 0,-92"
      stroke-width="8"
      fill-opacity="0"
      style="
        stroke-dasharray: 289.027px, 289.027px;
        stroke-dashoffset: 245.673px;
      "
    >
    </path>
    <text id="text"class="CircularProgressbar-text"  x="50" y="50">${t}</text>
    </svg>`
}, 1000);

const tbody = document.getElementById("table");

set(data);
function set(data) {
  data.forEach(element =>{
    const tr = document.createElement('div');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');
    const td6 = document.createElement('td');

    td1.setAttribute('style','padding-left: 8p%')
    td3.setAttribute('style','padding-left: 5%')
    td2.setAttribute('style','padding-left: 45%')
    td4.setAttribute('style','padding-left: 38%')
    td5.setAttribute('style','padding-left: 48%')
    td6.setAttribute('style','padding-left: 58%')

    td1.setAttribute('class', 'align-middle');
    td1.innerHTML = `<h4 class="table-text align-middle"><span class="pointer">${element.id}</span></h4>`
    td2.setAttribute('class', 'align-middle');
    td2.innerHTML = `<h4 class="table-text align-middle"><span class="pointer">${element.name}</span></h4>`
    td3.setAttribute('class', 'align-middle');
    td3.innerHTML = `<h4 class="table-text align-middle"><span class="pointer">₹ ${element.last}</span></h4>`
    td4.setAttribute('class', 'align-middle');
    td4.innerHTML = `<h4 class="table-text align-middle">
                      <span class="pointer">₹ ${element.buy} / ₹ ${element.sell}</span>
                       </h4>`
    td5.setAttribute('class', 'align-middle');
    td5.innerHTML = `<h4 class="table-text align-middle"><span class="pointer">₹ ${element.volume}</span></h4>`
    td6.setAttribute('class', 'align-middle');
    td6.innerHTML = `<h4 class="table-text align-middle"><span class="pointer">₹ ${element.base_unit}</span></h4>`
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tbody.appendChild(tr);
  })
}



