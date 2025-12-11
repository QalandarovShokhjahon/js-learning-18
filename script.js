"use strict";

// firstElementChild → bu ota elementning birinchi farzand elementi. U text node-larni e'tiborga olmaydi, faqat HTML elementni qaytaradi.

// let box = document.querySelector("#box")
// console.log(box.firstElementChild)

// lastElementChild → ota elementning oxirgi farzand elementini qaytaradi. U faqat HTML elementlarni oladi va text node-larni inobatga olmaydi.
let box = document.querySelector("#box");
console.log(box.lastElementChild);

//  parentElement → berilgan elementning ota (parent) elementini qaytaradi. Agar ota tugun element bo‘lmasa, null qaytaradi.

let p = document.querySelector("p");
console.log(p.parentElement);

// nextElementSibling → biror elementning keyingi tug'ilgan (yaqin) elementini olish uchun ishlatiladi. U faqat HTML elementlarni qaytaradi, bo‘sh joylar (text node) yoki sharhlarni emas.
let div = document.querySelector("div");

console.log(div.nextElementSibling);
console.log(div.nextElementSibling.nextElementSibling);

// previousElementSibling → biror elementning avvalgi aka-uka (sibling) elementini olish uchun ishlatiladi.
let span = document.querySelector("span");

console.log(span.previousElementSibling);
console.log(span.previousElementSibling.previousElementSibling);

// data- → bu HTML elementlariga maxsus ma'lumot qo'shish uchun ishlatiladigan Custom Data Attribute (maxsus ma'lumot atributi).

// dataset → bu JavaScript orqali data- atributlari bilan ishlashga imkon beruvchi xususiyat.
let dataId = document.querySelector('[data-id="101"]');
console.log(dataId.dataset.id);
console.log(dataId.dataset.name);
