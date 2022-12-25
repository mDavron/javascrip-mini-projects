let w = document.querySelector(".w");
let h = document.querySelector(".h");

let width = window.screen.availWidth;
let height = window.screen.availHeight;

w.innerText = width;
h.innerText = height;
// ======================================
// ===== this,bind,call,apply ======
// ======================================

function myName() {
  console.log("Hello My Name is:", this);
}
let car = {
  name: "Cobalt",
  year: 2020,
  sayName: myName,
  info: function (model) {
    console.log(`Name is: ${this.name}`);
    console.log(`Year is: ${this.year}`);
    console.log(`Color is: ${this.color}`);
    console.log(`Model is: ${model}`);
  },
};

let jentra = {
  name: "Jentra",
  year: 2019,
  color: "gray",
};
car.info.bind(jentra,"super")();//bind functiyani chaqirsagina ishlaydi
car.info.call(jentra,"super");//call functiyani birdan uzi chaqirib yuboradi
car.info.apply(jentra, ["super"]);//apply ham call ga o`hshaydi, faqat array qabul qiladi
