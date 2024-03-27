let shoppingCard = [];
let totalAmount = 0;

if (localStorage.getItem("shoppingCards")) {
    shoppingCards = JSON.parse(localStorage.getItem(shoppingCards))

    for (let card of shoppingCards) {
        totalAmount += card.price;

    }
}


