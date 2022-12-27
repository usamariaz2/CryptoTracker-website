console.log("Welcome usama")
let btc =document.getElementById('bitcoin')
let doge =document.getElementById('dogecoin')
let ltc =document.getElementById('litecoin')

var pricelist = {
    "async":"true",
    "scroosDomain":"true",
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cdogecoin&vs_currencies=usd",
    "method":"GET",
    "header":{}
}
$.ajax(pricelist).done((e)=>{
    btc.innerHTML=e.bitcoin.usd
    ltc.innerHTML=e.litecoin.usd
    doge.innerHTML=e.dogecoin.usd
})