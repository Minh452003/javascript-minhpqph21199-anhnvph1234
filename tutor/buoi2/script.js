// /*
// Các thành phần trong DOM
// -Element
// -Attributes
// -Text

// */
// // console.log(document);

// // console.log(document.getElementById("main-title"));

// // const mainTitle = document.getElementById("main-title");
// // console.log(mainTitle);

// // const title1 = document.getElementsByClassName("title1");
// // console.log(title1);

// // const tenthe = document.getElementsByTagName("h1");
// // console.log(tenthe);

// // const query = document.querySelector("h1");
// // console.log(query);

// const productTitle = document.createElement("h2");
// productTitle.innerHTML = "Tiêu đề sản phẩm";
// productTitle.classList.add("product-title");
// const productDiv = document.querySelector(".products");
// // productDiv.append(productTitle)
// // productDiv.prepend(productTitle);
// // productDiv.before(productTitle);
// productDiv.after(productTitle);
// // console.log(productDiv);
// productDiv.remove();

const MainTitle = document.querySelector("#main-title");
// MainTitle.onclick = function () {
//     console.log("1");
// }
// MainTitle.onclick = function () {
//     console.log("2");
// }

// const addProduct = () => {
//     console.log("Bạn vừa thêm sản phẩm");
// }

// MainTitle.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("NOOOO");
// })
// MainTitle.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("1");
// })

function message1() {
    console.log("Thông báo 1");
}
function message2() {
    console.log("Thông báo 2");
}
MainTitle.addEventListener("click", message1);
MainTitle.addEventListener("click", message2);

setTimeout(() => {
    MainTitle.removeEventListener("click", message2);
}, 3000);