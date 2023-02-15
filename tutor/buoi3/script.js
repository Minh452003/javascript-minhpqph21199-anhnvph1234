// // // function bar() {
// // //     setTimeout(function () {
// // //         console.log("2");
// // //     }, 5000);
// // // };
// // // function foo() {
// // //     console.log("1");
// // // };
// // // function baz() {
// // //     console.log("3");
// // // };
// // // setTimeout(() => {
// // //     console.log("4");
// // // }, 1000)

// // // bar();
// // // foo();
// // // baz();

// // // const projects = [];
// // // setTimeout(() => {
// // //     projects = [{ a: 10 }]
// // // }, 1000);

// // // console.log(projects);

// // function loadScripts(src, callback) {
// //     const script = document.createElement('script');
// //     script.src = src;
// //     script.onload = function () {
// //         callback(null, script);
// //     };
// //     script.onerror = function () {
// //         callback(new Error("Lỗi rồi!!!!!!!!!"));
// //     }
// //     document.head.append(script);

// // };
// // loadScripts("https://github.com/", function (error, script) {
// //     if (error) {
// //         console.log(error);
// //     } else {
// //         console.log(script);
// //     }

// // });




// // function myPromise() {
// //     return new Promise(function (resolve, reject) {
// //         const status = true;
// //         setTimeout(function () {
// //             if (status) {
// //                 resolve("ahihi");
// //             } else {
// //                 reject("false");
// //             }

// //         }, 1000);
// //     });
// // }
// // myPromise().then(function (message) {
// //     console.log(message);
// // }).catch(function (error) {
// //     console.log(error);
// // })



// function loadScripts(src) {
//     return new Promise(function (resolve, reject) {
//         const script = document.createElement('script');
//         script.src = src;
//         script.onload = function () {
//             resolve(script);
//         };
//         script.onerror = function () {
//             reject(new Error("Lỗi rồi!!!!!!!!!"));
//         }
//         document.head.append(script);
//     })


// };
// loadScripts("https://github.com/")
//     .then(() => console.log("script loaded", script))
//     .then(() => console.log())



