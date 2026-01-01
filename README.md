# 🧠 JavaScript Day 18 — DOM Traversing Properties

Bu darsda men JavaScript’da **DOM bo‘ylab harakatlanish (traversing)** uchun ishlatiladigan property’larni o‘rgandim.
Ular yordamida elementning ota-onasi, farzandlari va qo‘shni elementlari bilan ishlash mumkin.

---

## 📚 O‘rganganlarim / What I learned

### parentElement

`parentElement` — elementning **ota (parent) elementini** qaytaradi.

```
const item = document.querySelector('.item');
const parent = item.parentElement;
console.log(parent);
```

---

### firstChild / lastChild

`firstChild` va `lastChild` — element ichidagi **birinchi va oxirgi child**ni qaytaradi.
(Eslatma: text node ham bo‘lishi mumkin)

```
const list = document.querySelector('ul');

console.log(list.firstChild);
console.log(list.lastChild);
```

> ⚠️ Amalda ko‘proq `firstElementChild` va `lastElementChild` ishlatiladi.

---

### nextSibling

`nextSibling` — elementdan keyingi **qo‘shni node**ni qaytaradi.

```
const current = document.querySelector('.active');
console.log(current.nextSibling);
```

> ✅ Element bilan ishlash uchun `nextElementSibling` qulayroq.

---

### data

`data` — **text node** ichidagi matnni olish yoki o‘zgartirish uchun ishlatiladi.

```
const textNode = document.querySelector('p').firstChild;
console.log(textNode.data);

textNode.data = 'Yangi matn';
```

---

## 💻 Kod namunasi / Example code

```
const list = document.querySelector('ul');

// Parent
document.querySelector('.item').parentElement.style.background = '#f2f2f2';

// Children
list.firstElementChild.textContent = 'Birinchi element';
list.lastElementChild.textContent = 'Oxirgi element';

// Sibling
list.firstElementChild.nextElementSibling.classList.add('active');
```

---

## 🧩 Qisqacha nazariya / Short Theory

* `parentElement` → ota element
* `firstChild / lastChild` → birinchi/oxirgi child (node)
* `firstElementChild / lastElementChild` → faqat elementlar
* `nextSibling` → keyingi node
* `data` → text node matni

---

## 🎯 Maqsad / Goal

Ushbu darsning maqsadi — JavaScript’da **DOM tuzilmasini chuqur tushunish** va elementlar o‘rtasida erkin harakatlana olish.

Buning yordamida:

* Murakkab HTML strukturalar bilan ishlash
* Kerakli elementni tez topish
* Dinamik UI logikasini qurish
  mumkin bo‘ladi.

---

## 💬 Muallif / Author

✍️ Shokhjahon Qalandarov
📅 Dars: 18-kun — DOM Traversing Pr
