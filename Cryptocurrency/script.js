// Api key: CG - HhbUi8uSb9PZHjsBc6mfrkbS

// https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd"

let bitcoin = document.getElementById('bitcoin');
let dogecoin = document.getElementById('dogecoin');
let ethereum = document.getElementById('ethereum');

var setting = {
    "async" : true, 
    "scrossDomain" : true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method" : "GET", 
    "headers" : {}
}

$.ajax(setting).done(function (response) {
    bitcoin.innerHTML = response.bitcoin.usd;
    dogecoin.innerHTML = response.dogecoin.usd;
    ethereum.innerHTML = response.ethereum.usd;
})