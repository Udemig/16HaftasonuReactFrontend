// burasi aciklama

/* 
2 satir ve daha fazla durumda kullaniriz
*/



let kadi = prompt("kullanici adini gir")

console.log(kadi)

let yeniBilgi = new String("MEmocan nasilsin sen bakayim")
document.write("yeniBilgi: " + yeniBilgi + "</br>")

//cumlenin toplam haff uzunlugunu getirir bosluk buna dahildir
document.write("yeniBilgi length: " + yeniBilgi.length + "</br>")
let sonBilgi =  yeniBilgi.trim() //sagdan ve soldan bosluklari siler
document.write("sonBilgi length: " + sonBilgi.length + "</br>")
// iceriyorsa true degilse false cevirir
document.write("sonBilgi includes: " + sonBilgi.includes("sen") + "</br>")
//velirtilen 2 adarlik arasini alir ama tek deger girilirse ordan itibaren alir
document.write("sonBilgi slice: " + sonBilgi.slice(0,6) + "</br>")
//her seyi buyuk harfe cevir
document.write("sonBilgi toUpperCase: " + sonBilgi.toUpperCase() + "</br>")
//her seyi kucuk harfe cevir
document.write("sonBilgi toLowerCase: " + sonBilgi.toLowerCase() + "</br>")

let yeniSonuc = yeniBilgi.split(" ") //diziye veriri bir metni
document.write("yeniSonuc split: " + yeniSonuc + "</br>")

/*


document.write("typeof yeniBilgi: " + (typeof yeniBilgi)+ "</br>")

*/
document.write("-- - - - - : ------ -- - - --- - : "  + "-- -- - - - -- " + "</br>")


//NUMBER
let sayimiz = 20.32532 // new Number
let sayimizString = sayimiz.toString() // sayiyi string olarak cevir
let sayimizString1 = new String(sayimiz) // stringe cevirdi

//. dan sonraki sayiyi belirtiyoruz
document.write("sayimiz toFixed: " + sayimiz.toFixed(3)+ "</br>")

//toplam basamak sayisini veriyoruz bize ona gore ceviriyor
document.write("sayimiz toPrecision: " + sayimiz.toPrecision(3)+ "</br>")


let yasimString = "9350.352389"
let yeniStringNumber =  new Number(yasimString) //sayi yapti / Number
let yeniStringNumber1 = parseFloat(yasimString) //ondalikli olarak cevir Number.parseFloat
let yeniStringNumber2 = parseInt(yasimString) // 20 Number.parseInt, tam kismini alir

let isNanSonuc = Number.isNaN("meotn293")

document.write("yasimString: isNaN " + isNanSonuc + "</br>")

document.write("-- - - -- - : ------ -- - - --- - : "+ Number("feanj")  + "-- -- - - - -- " + "</br>")



//TANIMLAMA
var ad = "memo"
ad = "can"
var ad = "esra"

document.write("adsoyad: " + ad + "</br>")

let yas = 20
yas = 25
document.write("yas: " + yas + "</br>")

const PI = 3.14

document.write("PI: " + PI + "</br>")


//OPERATORLAR
let sayi1 = 2
let sayi2 = 4
document.write("sayi1 : ------ -- - - --- - : " + sayi1 + "-- -- - - - -- " + "</br>")
document.write("sayi2 : ------ -- - - --- - : " + sayi2 + "-- -- - - - -- " + "</br>")


let toplam = sayi1 + sayi2
document.write("toplam: " + toplam + "</br>")


let cikarma = sayi2 - sayi1
document.write("cikarma: " + cikarma + "</br>")

let carpma = sayi1 * sayi2
document.write("carpma: " + carpma + "</br>")

let bol = sayi2 / sayi1
document.write("bol: " + bol + "</br>")



let modSonuc = sayi2 % sayi1
document.write("modSonuc: " + modSonuc + "</br>")

sayi1++ // sayi1 = sayi1 + 1
document.write("sayi1: " + sayi1 + "</br>")

sayi1-- // sayi1 = sayi1 - 1
document.write("sayi1: " + sayi1 + "</br>")

//KARSILASTIRMALAR

if (sayi2 > 3) {
    document.write("sayi2 3'ten buyuktur " + "</br>")
}

if (sayi2 >= 4) {
    document.write("sayi2 4 veya daha buyuktur " + "</br>")
}

if (sayi1 < 3) {
    document.write("sayi1 3'ten kucuktur " + "</br>")
}

if (sayi1 <= 2) {
    document.write("sayi1 2'den kucuk veya esittir " + "</br>")
}

if (sayi1 == 2) {
    document.write("sayi1 2'ye esittir " + "</br>")
}


if (sayi1 != 3) {
    document.write("sayi1 3 degildir " + "</br>")
}


if (sayi1 == 1) {
    document.write("sayi1 1'e esittir " + "</br>")
} else {
    document.write("sayi1 1' degildir " + "</br>")
}


if (sayi1 == 1) {
    document.write("sayi1 1'e esittir " + "</br>")
} else if (sayi1 == 2) {
    document.write("sayi1 2'ye esittir " + "</br>")
} else {
    document.write("sayi1 n1 1 ne de 2'dir " + "</br>")
}


let gun = 7

switch (gun) {
    case 0:
        document.write("bugun pazar " + "</br>")
        break;
    case 1:
        document.write("bugun pazartesi " + "</br>")
        break;
    case 2:
        document.write("bugun sali " + "</br>")
        break;
    case 3:
        document.write("bugun carsamba " + "</br>")
        break;
    case 4:
        document.write("bugun persembe " + "</br>")
        break;
    case 5:
        document.write("bugun cuma " + "</br>")
        break;
    case 6:
        document.write("bugun cumartesi " + "</br>")
        break;
    default:
        document.write("bilinmeyen gun " + "</br>")
}

//TERNARY 

let yasim = 17

let sonucum = yasim > 18 ? "oy kullan" : "oy kullanma"

document.write("sonucum: " + sonucum + "</br>")


//LOOP

for (let index = 0; index < 10; index++) {
    if (index==3) {
        continue
    }

    if (index==7) {
        break
    }

document.write("index: " + index + "</br>")

}

let sayac = 1

while (sayac < 5 ) {
    document.write("sayac: " + sayac + "</br>")
    sayac++
}


let yeniSayac = 9

do {
     document.write("yeniSayac: " + yeniSayac + "</br>")
    yeniSayac++
} while (yeniSayac < 8);


sayi1+=3 // sayi1 = sayi1 + 3

document.write("sayi1: " + sayi1 + "</br>")

sayi1*=4 // sayi1 = sayi1 * 4
document.write("sayi1: " + sayi1 + "</br>")

sayi1/=10 // sayi1 = sayi1 / 10
document.write("sayi1: " + sayi1 + "</br>")

sayi1-=1 // sayi1 = sayi1 - 1
document.write("sayi1: " + sayi1 + "</br>")

//template strings

let asilYas = 20


//back tick 
let bilgi = `benim asil yasim ${asilYas} dir ya snein nedir?`
document.write("bilgi: " + bilgi + "</br>")


