let clothes = document.querySelector(".clothes-mysklad-markirovka"),
    beer = document.querySelector(".beer-mysklad-markirovka"),
    tobacco = document.querySelector(".tobacco-mysklad-markirovka"),
    milk = document.querySelector(".milk-mysklad-markirovka"),
    water = document.querySelector(".water-mysklad-markirovka"),
    shoes = document.querySelector(".shoes-mysklad-markirovka"),
    perfume = document.querySelector(".perfume-mysklad-markirovka")

clothes.addEventListener("click", function(){
    clothes.style.border = "2px solid #30d5c8"
    beer.style.border = "none"
    tobacco.style.border = "none"
    milk.style.border = "none"
    water.style.border = "none"
    shoes.style.border = "none"
    perfume.style.border = "none"
})

beer.addEventListener("click", function(){
    clothes.style.border = "none"
    beer.style.border = "2px solid #30d5c8"
    tobacco.style.border = "none"
    milk.style.border = "none"
    water.style.border = "none"
    shoes.style.border = "none"
    perfume.style.border = "none"
})

tobacco.addEventListener("click", function(){
    clothes.style.border = "none"
    beer.style.border = "none"
    tobacco.style.border = "2px solid #30d5c8"
    milk.style.border = "none"
    water.style.border = "none"
    shoes.style.border = "none"
    perfume.style.border = "none"
})

milk.addEventListener("click", function(){
    clothes.style.border = "none"
    beer.style.border = "none"
    tobacco.style.border = "none"
    milk.style.border = "2px solid #30d5c8"
    water.style.border = "none"
    shoes.style.border = "none"
    perfume.style.border = "none"
})

water.addEventListener("click", function(){
    clothes.style.border = "none"
    beer.style.border = "none"
    tobacco.style.border = "none"
    milk.style.border = "none"
    water.style.border = "2px solid #30d5c8"
    shoes.style.border = "none"
    perfume.style.border = "none"
})

shoes.addEventListener("click", function(){
    clothes.style.border = "none"
    beer.style.border = "none"
    tobacco.style.border = "none"
    milk.style.border = "none"
    water.style.border = "none"
    shoes.style.border = "2px solid #30d5c8"
    perfume.style.border = "none"
})

perfume.addEventListener("click", function(){
    clothes.style.border = "none"
    beer.style.border = "none"
    tobacco.style.border = "none"
    milk.style.border = "none"
    water.style.border = "none"
    shoes.style.border = "none"
    perfume.style.border = "2px solid #30d5c8"
})
