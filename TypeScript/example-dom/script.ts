// Returns a random integer from 0 to 9:
var a:number;
a = Math.floor(Math.random() * 10);
var div:any = document.getElementById("demo1");
div.innerHTML = a;


// Returns a random integer from 1 to 10:
var b:number = Math.floor(Math.random() * 10) + 1;
// var div1:any = document.getElementById("demo2");
var div1 = document.getElementById("demo2") as any;
div1.innerHTML = b;


let myDiv = <HTMLElement>document.getElementById("demo3");
var c:string = "Hello, World!";
myDiv.innerHTML = c;


let myDiv1 = document.getElementById("demo4") as HTMLDivElement;
myDiv1.innerHTML = c;


let myDiv2 = document.getElementById("demo5") as HTMLInputElement;
myDiv2.innerHTML = c;


const el = document.getElementById("demo6") as any;
el.innerHTML = a;


let page: number = 10;
let someElement = document.querySelector("#demo7") as any;
someElement.innerHTML = "someElement " + page;


const maybeMyElement = document.getElementById('demo1');
maybeMyElement?.addEventListener('click', (e: Event) => {
  console.log(e);
});


const d = document.getElementById("demo8") as HTMLElement;
var e = 100 as any;
d.innerHTML = e;


let p:any = document.createElement("p") as HTMLParagraphElement;
// or
// const p = document.createElement("p");
p.textContent = "Create element";
document.getElementById("demo8")?.appendChild(p);



// getElementById(elementId: string): HTMLElement | null;

// var c:any;
// c = 10;
// let myDiv1 = document.getElementById("demo1") as HTMLDivElement;
// //Manipulating the element by setting its innerHTML
// // myDiv1.innerText = c;

// let myContainer = document.getElementById('demo') as HTMLInputElement;
// myContainer.innerText = c;


var id:any = document.querySelector("#demo1");
var aa:number = id.innerHTML;
console.log(aa);




// a": HTMLAnchorElement;
// "abbr": HTMLElement;
// "address": HTMLElement;
// HTMLInputElement
// HTMLDivElement
// "applet": HTMLAppletElement;
// "area": HTMLAreaElement;