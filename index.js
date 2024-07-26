let clothes = document.querySelector(".clothes-mysklad-markirovka"),
    milk = document.querySelector(".milk-mysklad-markirovka"),
    water = document.querySelector(".water-mysklad-markirovka"),
    shoes = document.querySelector(".shoes-mysklad-markirovka"),
    perfume = document.querySelector(".perfume-mysklad-markirovka"),
    info_clothes = document.querySelector(".conteiner-clothes-mysklad-markirovka"),
    info_milk = document.querySelector(".conteiner-milk-mysklad-markirovka"),
    info_water = document.querySelector(".conteiner-water-mysklad-markirovka"),
    info_shoes = document.querySelector(".conteiner-shoes-mysklad-markirovka"),
    info_perfume = document.querySelector(".conteiner-perfume-mysklad-markirovka")

clothes.addEventListener("click", function(){
    clothes.style.border = "2px solid #30d5c8"
    milk.style.border = "none"
    water.style.border = "none"
    shoes.style.border = "none"
    perfume.style.border = "none"
    info_clothes.style.display = "flex"
    info_milk.style.display = "none"
    info_water.style.display = "none"
    info_shoes.style.display = "none"
    info_perfume.style.display = "none"
})

milk.addEventListener("click", function(){
    clothes.style.border = "none"
    milk.style.border = "2px solid #30d5c8"
    water.style.border = "none"
    shoes.style.border = "none"
    perfume.style.border = "none"
    info_clothes.style.display = "none"
    info_milk.style.display = "flex"
    info_water.style.display = "none"
    info_shoes.style.display = "none"
    info_perfume.style.display = "none"
})

water.addEventListener("click", function(){
    clothes.style.border = "none"
    milk.style.border = "none"
    water.style.border = "2px solid #30d5c8"
    shoes.style.border = "none"
    perfume.style.border = "none"
    info_clothes.style.display = "none"
    info_milk.style.display = "none"
    info_water.style.display = "flex"
    info_shoes.style.display = "none"
    info_perfume.style.display = "none"
})

shoes.addEventListener("click", function(){
    clothes.style.border = "none"
    milk.style.border = "none"
    water.style.border = "none"
    shoes.style.border = "2px solid #30d5c8"
    perfume.style.border = "none"
    info_clothes.style.display = "none"
    info_milk.style.display = "none"
    info_water.style.display = "none"
    info_shoes.style.display = "flex"
    info_perfume.style.display = "none"
})

perfume.addEventListener("click", function(){
    clothes.style.border = "none"
    milk.style.border = "none"
    water.style.border = "none"
    shoes.style.border = "none"
    perfume.style.border = "2px solid #30d5c8"
    info_clothes.style.display = "none"
    info_milk.style.display = "none"
    info_water.style.display = "none"
    info_shoes.style.display = "none"
    info_perfume.style.display = "flex"
})
