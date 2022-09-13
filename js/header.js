window.onload = function(){
    openDivtowindow()
    openDivtowindow1()
    openDivtowindow2()
}

function  openDivtowindow(){
    document.querySelector("#id_pic").addEventListener("click", function(){
        window.open("https://en.wikipedia.org/wiki/Floating_market")
    })
}

function  openDivtowindow1(){
    document.querySelector("#id_pic1").addEventListener("click", function(){
        window.open("https://www.agoda.com/da-dk/pages/agoda/default/DestinationSearchResult.aspx?city=17198&site_id=1760907&tag=548d4dc5-dfeb-744a-9216-df9f4c7369a8&msclkid=6c0cc66c1d7811fac4c2a48eeca63402")
    })
}

function  openDivtowindow2(){
    document.querySelector("#id_pic2").addEventListener("click", function(){
        window.open("https://www.booking.com/city/th/phuket.en-gb.html?aid=357028&label=bin859jc-1DCAMo3QE4aUgzWANoaogBAZgBCbgBF8gBDNgBA-gBAYgCAagCA7gC9uSLlwbAAgHSAiRkOGE4MjJjYi0yMDg3LTRiOWEtODg2My1lMGRmYTAyZDNkYjjYAgTgAgE&sid=e41e3fd29b53a80c8fe6285f26b422e1&inac=0&keep_landing=1&")
    })
}