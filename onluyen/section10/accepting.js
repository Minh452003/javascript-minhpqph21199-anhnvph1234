const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}
const upperFirstWord = function (str) {
    const [first, ...others] = str.split('');
    return [first.toUpperCase(), ...others].john('');
};

const transformer = function (str, fn) {
    console.log(`Driginal string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);

};
transformer('Phùng Quang Minh', upperFirstWord);