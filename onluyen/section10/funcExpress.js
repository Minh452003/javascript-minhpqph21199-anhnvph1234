const runOnce = function () {
    console.log('This will never run again');
};
runOnce();
(function () {
    console.log('This will never');
    const isPrivate = 23;
})();
// console.log(isPrivate);

(() => console.log('This'))();

{
    const isPrivate = 23;
    var notPrivate = 46;
}
console.log(notPrivate);