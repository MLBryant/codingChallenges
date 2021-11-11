const guessTheGifts = (arrWish, arrGifts) => {
    let arrAnswer = []
    arrWish.forEach(elem => {
        for (i = 0; i < arrGifts.length; i++) {
            if (elem.size === arrGifts[i].size && elem.clatters === arrGifts[i].clatters &&elem.weight === arrGifts[i].weight) {
                arrAnswer.push(elem.name)
            }
        }
    })
    return arrAnswer
}

var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

console.log(guessTheGifts(wishlist, presents));