const premierLague = new Array("Arsenal", "Man City", "Newcastle", "Minh");
console.log(premierLague);

// Duyệt mảng
for (item of premierLague) {
    console.log(item);
}

for (let index in premierLague) {
    console.log(index);
}
premierLague.forEach((team, index) => {
    console.log(team + ":" + index);
});
// Thêm có push,splice
premierLague.push("Duy");
console.log(premierLague);

const length = premierLague.length;
premierLague.splice(length, 1, "LIverpool")

// Xoá
//B1: Tìm index
//B2:Dùng hàm xoá

const index1 = premierLague.indexOf("Liverpool");
premierLague.splice(index1, 1);

// Sửa
const index = premierLague.indexOf("Newcastle");
premierLague[index] = "MU";
/* Map */
const newArray = premierLague.map((team, index) => {
    if (team == "MU") {
        return "Man";
    } else {
        return team;
    }
});
console.log(newArray);

const animals = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" }
];
const newAnimal = {
    id: 2, name: "b update"
}
const newAnimals = animals.map(animal => {
    return animal.id == newAnimal.id ? newAnimal : animal;
})
console.log(newAnimals);

// Tìm kiếm
const team = premierLague.find((team) => {
    return team.toLowerCase() == "Minh".toLowerCase();
});
console.log(team);
// BTVN:tìm kiếm đội bóng sao cho chỉ cần nhập 3 chũ cái đầu

// Lọc
const filtered = premierLague.filter(function (team) {
    return team == "Man City";
});
console.log(filtered);