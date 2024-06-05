const APIURL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd"
const bitcoin_id = document.getElementById("bitcoin")
const etherem_id = document.getElementById("etherem")
const dogecoin_id = document.getElementById("dogecoin")

async function getCryptoPrice(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    bitcoin_id.innerHTML = data.bitcoin.usd
    etherem_id.innerHTML = data.ethereum.usd
    dogecoin_id.innerHTML = data.dogecoin.usd
  }

getCryptoPrice(APIURL);