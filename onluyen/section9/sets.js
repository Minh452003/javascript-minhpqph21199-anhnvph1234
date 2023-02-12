const oderSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Passta', 'Pizza']);

console.log(oderSet);

console.log(new Set('Jonas'));
console.log(oderSet.size);
console.log(oderSet.has('Pizza'));
console.log(oderSet.has('Bread'));

oderSet.add('Garlic Bread');
oderSet.add('Garlic Bread');
oderSet.delete('Risotto');
// oderSet.clear();
console.log(oderSet);
for (const order of oderSet)
    console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager']).size);

console.log(new Set('Minh').size);