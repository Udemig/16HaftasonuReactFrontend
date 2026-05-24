"use strict"

//DOM

const alan2Element = document.getElementById("alan2")
alan2Element.innerText = "memo alana ulasti 2"
alan2Element.classList.add("sinif1")
alan2Element.style.fontSize = "24px"

const alan1Elementler = document.getElementsByClassName("alan1")
alan1Elementler[0].classList.add("sinif2")
console.log(alan1Elementler)

const divElemanOlsuturma = document.createElement('div')
divElemanOlsuturma.innerText = "yeni olusturm ben"
divElemanOlsuturma.classList.add("sinif2")

alan2Element.appendChild(divElemanOlsuturma)

const alan1Element2 = document.querySelector(".alan1")
alan1Element2.innerHTML = "<b> Ben yeni </br> alan 1 </b>"


document.write("ad1: " + ad1 + "</br>") 

//document.write("ad1: " + ad2 + "</br>") 

function tiklanma1(){
    console.log("bana tiklandi")
}

const girisFormuElement =  document.getElementById("girisFormu")
girisFormuElement.addEventListener("submit", girisYap)

function girisYap(event){
    event.preventDefault()

    let formKadi = document.forms["girisFormu"]["kadi"].value
    let formSifre = document.forms["girisFormu"]["sifre"].value

    console.log(formKadi, formSifre)

}

var ad1 = "can"
let ad2 = "can1"
const ad3 = "can2"

function calis2(ad, yas) {
    document.write("calis3 calisti: " + ad  + "</br>") 

}

const calis1 = () =>{
document.write("calis1 calisti: "  + "</br>") 
}

const calis3 = ad => {
document.write("calis3 calisti: " + ad  + "</br>") 
}

const calis4 = (ad, yas) => {
    document.write("calis4 calisti: " + ad + yas  + "</br>") 
}

const sonuc7 = (sayi1, sayi2) => {
    return sayi1 +sayi2
} 

const sonuc8 = (sayi1, sayi2) => sayi1 +sayi2






calis1()
calis3("memo")
calis4("can", 30)

document.write("sonuc7 calisti: " + sonuc7(4,5) + "</br>") 
document.write("sonuc8 calisti: " + sonuc8(5,5) + "</br>") 



//Sets

const urunler = new Set(["altin","gumus","coin","altin"]) // WeakSet
urunler.add("telefon")

urunler.delete("coin")

document.write("urunler: " + urunler + "</br>") 

urunler.forEach(element => {
 document.write("element: " + element + "</br>") 

});

//debugger
//Map WeakMap
const meyveler = new Map([
    ["elma",500],
    ["armut",400]
])

meyveler.set("portakal",200)

meyveler.set("armut",1200)


for (const key of meyveler) {
    
     document.write("key: " + key + "</br>") 

}


const isimler1 = ["memo","can","seyhan","esra","canturk","asuman","ozel"] // Array


document.write("- - -- - - - - -- - - - -- : "  + "</br>") 
document.write("isimler1: " + isimler1 + "</br>") 
document.write("- - -- - - - - -- - - - -- : "  + "</br>") 

for (const key in isimler1) {

document.write("key: " + isimler1[key] + "</br>") 
}



//MATH
let fiyat = 2.5546
document.write("fiyat toFixed: " + fiyat.toFixed(2) + "</br>") 


document.write("Math floor: " + Math.floor(fiyat) + "</br>") 
document.write("Math ceil: " + Math.ceil(fiyat) + "</br>") 

document.write("Math round: " + Math.round(fiyat) + "</br>") 



document.write("- - -- - - - - -- - - - -- : "  + "</br>") 

document.write("- - -- - - - - -- - - - -- : "  + "</br>") 

let x = 4
// let eval = "nasil"



//Fonksiyonlar
function selamla() {
    document.write("merhabaalarrr " + "</br>")
}

selamla()
selamla()

/* 
Kullanici sayi tahmin oyunu oynamaktadir. Kullanicinin 3 hakki vardir. Eger
bilirse consola kazandiniz, 3 hakkina ragmen bilemezse conlosa kaybettiniz
yazan bir code-script yaziniz
0-100 arasi olsun

*/


let hak = 1

//rastegel SAyi uretirmi 0.11 arasinda Math.random()
let randSayi =parseInt( Math.random()*100 )

console.log(randSayi)
/*
while (hak < 4) {
    let alinanSayi = Number(prompt("tahmini gir"))
    if (alinanSayi == randSayi) {
        console.log("kazandiniz")
        break
    } else {
        hak++
        if (hak == 4) {
            console.log("kaybettiniz")
        }
    }
}
*/


function topla(sayi1, sayi2){
    let sonuc = sayi1 + sayi2
    document.write("sonuc: " + sonuc + "</br>")
}

topla(2,3)

function carp(sayi1, sayi2) {
    let sonuc = sayi1 * sayi2
    return sonuc
}

let gelenSonuc = carp(2,3)
document.write("gelenSonuc: " + gelenSonuc + "</br>")


//Objeler

const araba = {
    tip: "Porsche",
    model: 2021,
    renk: "siyah",
    calisti(){
        document.write("araba calistiiii: " + "</br>")
    },
    durdu(){
        document.write("araba durduuuu: " + "</br>")
    },
    kontrolEt(){
         document.write( this.tip + " araba kontrolde: " + "</br>")
         this.calisti() 
    }
}

document.write("araba tip: " + araba.tip + "</br>")
document.write("araba model: " + araba.model + "</br>")

araba.calisti()
araba.durdu()
araba.kontrolEt()


class Hayvan {

    constructor(adi, yas) {
        this.renk = "siyah"
        this.yasi = yas
         document.write("adii : " + adi + "</br>")
    }

    yuru(){
        document.write("hayvan yuruyor: yasi: " +this.yasi+ "</br>")

    }
    zipla(){
      document.write("hayvan ziplayor: "+ "</br>")
    }
}

const hyvn = new Hayvan("leo", 10)
hyvn.yuru()
document.write("hyvn renk: " + hyvn.renk + "</br>")


class Aslan extends Hayvan { //Object
    constructor(adi){
        super(adi, 10)
        this.adi = adi
    }

    yuru(){
        document.write("hayvan yurumemiyor: " + "</br>")
        this.zipla()

    }
    beslen(){
        document.write("hayvan besleniyor: " + "</br>") 
    }
    
}



const asln = new Aslan("can") // 
asln.yuru()

const tarih = new Date()
document.write("tarih : " + tarih + "</br>")

document.write("tarih getDate : " + tarih.getDate() + "</br>") 
tarih.setMonth(3)
document.write("tarih getMonth : " + tarih.getMonth() + "</br>") 

document.write("tarih getTime : " + tarih.getTime() + "</br>") 

//Diziler

const isimler = ["memo","can","seyhan","esra","canturk","asuman","ozel"] // Array
isimler[0] = "derya"
// delete isimler[1]

document.write("isimler 0: " +isimler[0] + "</br>") 

document.write("isimler length: " +isimler.length+ "</br>") 
isimler.push("emine")
isimler.unshift("melik")

isimler.pop()
isimler.shift()

for (let index = 0; index < isimler.length; index++) {
document.write("isimler index: " +isimler[index]+ "</br>") 
}

const rakamlar = [13,35,7,8,97,3,2,1]
document.write("rakamlar : " + rakamlar + "</br>") 


let yeniDizi = isimler.concat(rakamlar)
document.write("yeniDizi: " + yeniDizi + "</br>") 


yeniDizi.splice(0,2)
document.write("yeniDizi: " + yeniDizi + "</br>") 

document.write("- - -- - - - - -- - - - -- : "  + "</br>") 
document.write("isimler: " + isimler + "</br>") 
document.write("- - -- - - - - -- - - - -- : "  + "</br>") 


isimler.forEach(gez1)

function gez1(deger, sira, dizi){
    
document.write("deger: " + deger + " sira: " + sira + "</br>") 

}

const yeniIsimler = isimler.map(gez2) //flatMap , tek 1 dizi uzerinden islem yaapr

function gez2(deger, sira, dizi){
    
    return deger + sira 

}

document.write("yeniIsimler: " + yeniIsimler + "</br>") 

document.write("- - -- - - - - -- - - - -- : "  + "</br>") 
document.write("rakamlar: " + rakamlar + "</br>") 
document.write("- - -- - - - - -- - - - -- : "  + "</br>") 



const filtreRakamlar = rakamlar.filter(gez3)

function gez3(deger, sira, dizi){
    
    return deger > 10

}

document.write("filtreRakamlar: " + filtreRakamlar + "</br>") 

const toplanmis = rakamlar.reduce(gez4) // reduceRight


function gez4(toplam,deger, sira, dizi){
    
    return toplam + deger

}

document.write("toplanmis: " + toplanmis + "</br>") 








