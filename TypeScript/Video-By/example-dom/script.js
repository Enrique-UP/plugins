"use strict";
var _a;
// Returns a random integer from 0 to 9:
var a;
a = Math.floor(Math.random() * 10);
var div = document.getElementById("demo1");
div.innerHTML = a;
// Returns a random integer from 1 to 10:
var b = Math.floor(Math.random() * 10) + 1;
// var div1:any = document.getElementById("demo2");
var div1 = document.getElementById("demo2");
div1.innerHTML = b;
let myDiv = document.getElementById("demo3");
var c = "Hello, World!";
myDiv.innerHTML = c;
let myDiv1 = document.getElementById("demo4");
myDiv1.innerHTML = c;
let myDiv2 = document.getElementById("demo5");
myDiv2.innerHTML = c;
const el = document.getElementById("demo6");
el.innerHTML = a;
let page = 10;
let someElement = document.querySelector("#demo7");
someElement.innerHTML = "someElement " + page;
const maybeMyElement = document.getElementById('demo1');
maybeMyElement === null || maybeMyElement === void 0 ? void 0 : maybeMyElement.addEventListener('click', (e) => {
    console.log(e);
});
const d = document.getElementById("demo8");
var e = 100;
d.innerHTML = e;
let p = document.createElement("p");
// or
// const p = document.createElement("p");
p.textContent = "Create element";
(_a = document.getElementById("demo8")) === null || _a === void 0 ? void 0 : _a.appendChild(p);
// getElementById(elementId: string): HTMLElement | null;
// var c:any;
// c = 10;
// let myDiv1 = document.getElementById("demo1") as HTMLDivElement;
// //Manipulating the element by setting its innerHTML
// // myDiv1.innerText = c;
// let myContainer = document.getElementById('demo') as HTMLInputElement;
// myContainer.innerText = c;
var id = document.querySelector("#demo1");
var aa = id.innerHTML;
console.log(aa);
// a": HTMLAnchorElement;
// "abbr": HTMLElement;
// "address": HTMLElement;
// HTMLInputElement
// HTMLDivElement
// "applet": HTMLAppletElement;
// "area": HTMLAreaElement;
