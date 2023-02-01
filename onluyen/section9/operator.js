restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);