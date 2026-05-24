/* 
Kullanicidan kadi ve sifre alarak form uzerinden, kullanici giris yap
butonuna bastiginda elinizdeki kullanici adi ve sifre ile ayni ise console"a
"hosgeldiniz" degilse "yanlis bilgiler" yazan bir code-script yaziniz
Elinizde hazir olan kullanici adi ve sifre ile kiyaslayiniz

const girisFormuElement = document.forms["girisFormu"]


let kadi = "memo"
let sifre = "123"


girisFormuElement.addEventListener("submit",(event)=>{
    event.preventDefault()

const kadiElementDeger =  girisFormuElement["kadi"].value
const sifreElementDeger = girisFormuElement["sifre"].value

console.log("kadiElementDeger ", kadiElementDeger)

console.log("sifreElementDeger ", sifreElementDeger)


    if (kadiElementDeger == kadi && sifreElementDeger == sifre) {
        console.log("hosgeldiniz")
    } else {
        console.log("bilgiler yanlis")
    }
})

//Funcstion

function topla(sayi1, sayi2, sonucYazdir) {
    let sonuc = sayi1 +sayi2
    sonucYazdir(sonuc)
}

topla(1,3,sonuclarinKontrolu)

function sonuclarinKontrolu(gelenSonuc){
    document.write("gelenSonuc: "+ gelenSonuc  + "</br>")
}

//Sinif
class Araba{

    constructor(ad){
        this.ad = ad
    }

    static calis(){ 

    document.write("araba calisiyor: " + "</br>")

    }

    durdur(){
        document.write("araba durdu: "  + "</br>")
    }
}

const arab = new Araba("bmw")
arab.durdur()

 document.write("arab ad: "+ arab.ad + "</br>")

 Araba.calis()

 //Get set

 const kisi = {
    ad: "can",
    soyad: "seyhan",
    yas: 30,
    get yasiniAl(){
        return this.yas
    },
    set yasDegis(yeniYas){
        this.yas = yeniYas
    }
 }


 document.write("kisi ad: "+ kisi.ad + "</br>")

 kisi.yasDegis = 31
let alinanYas =  kisi.yasiniAl 

document.write("yasiniAl ad: "+alinanYas+ "</br>")

/*
setTimeout(() => {
    calis1()
}, 2000);



function calis1() {
    document.write("calis1: "+ "</br>")
}

/*
setInterval(() => {
    console.log("calistiyorummm")
}, 1000);


const gonderBtnElement = document.getElementById("gonderBtn")

gonderBtnElement.addEventListener("click",()=>{
   console.log("butona tikladin")
    girisFormuElement.classList.add("sinif1") 
})

gonderBtnElement.onclick = ()=>{
    console.log("butona tikladin")
    girisFormuElement.classList.add("sinif1")
}

function calis4(){
     console.log("butona tikladin")
    girisFormuElement.classList.add("sinif1")
}

//Promise

let promise = new Promise(function(resolve, reject){

    setTimeout(() => {
        resolve("islem basarilir")
    }, 1000);
})

promise.then(
    function(deger){console.log(deger)},
    function(deger){console.log(deger)}
)

//async await

Internete istek atip verileri alarak consola yaziniz

async function verileriAl() {
    const alinanCevap =  await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const alinanVeri = await alinanCevap.json()
    console.log(alinanVeri)
}

function verileriAl1() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(function (alinanCevap) {
        return alinanCevap.json()
    })
    .then(function(alinanVeri){
        console.log("alinanVeri: ",alinanVeri)
    })

}
    
verileriAl1()


verileriAl()*/



import {merhabalas, hesapla4} from "./hesapla.js"
import besle from "./insan.js";

merhabalas()
hesapla4(3,5)
besle()

//Window

console.log("window height", window.innerHeight)
console.log("window innerWidth", window.innerWidth)
console.log("window location", window.location)
//history

console.log("screen width", screen.width)
console.log("screen height", screen.height)

// alert("uyariii")

document.cookie = "kadi=memocan"

let alinanCerez = document.cookie

console.log("alinanCerez", alinanCerez)

//API
lokasyonAl()

function lokasyonAl() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(poziyonGoster)
    } else {
        console.log("cihaz konum desteklemiyor")
    }
}

function poziyonGoster(pozisyonlar){
    console.log(pozisyonlar.coords.latitude)
     console.log(pozisyonlar.coords.longitude)
}

localStorage.setItem("ad","mocan")
localStorage.setItem("yas","123")

let alinanAd = localStorage.getItem("ad")

console.log("alinanAd, ", alinanAd)

//AJAX

function veriAl5(){
    const xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
        if (this.status == 200 && this.readyState== 4) {
            console.log("veriii ", this.responseText)
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos/1")
    xhttp.send()
}


veriAl5()

//JSON
/*
{} -> obje
[] -> dizi
 : degisken


 const araba1 = {
    ad: "bmw",
    renk: "sari",
    yas: 20,
    tekerlekler: ["sari", "kirmizi","yesil"]
 }


 "araba1" : {
    "ad": "bmw",
    "yas": 20,
    "renk": "sari",
    "tekerlekler": ["sari", "kirmizi","yesil"]
 }
*/

/* 
elinizde mahalle adinda bir js obejesi icinde insansayisi, konuslandiller(dizi),
olacak sekilde objesini olusturun ve bunu ayni zaman json a da ceviriniz

*/