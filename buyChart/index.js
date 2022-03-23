const availableShoes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const buyBtn = document.getElementById("buyBtn")
const displayText = document.getElementById("displayText")

buyBtn.addEventListener("click", () => {
    availableShoes.pop()
    console.log(availableShoes)
    if(availableShoes.length === 9){
      displayText.innerHTML = `<p>Thank you for purchasing this item! <span>Item addes to chart: 1!</span></p>`
    }else if(availableShoes.length === 8){
        displayText.innerHTML = `<p>Thank you for purchasing this item! <span>Item addes to chart: 2!</span></p>`
    }else if(availableShoes.length === 7){
        displayText.innerHTML = `<p>Thank you for purchasing this item! <span>Item addes to chart: 3!</span></p>`
    }else if(availableShoes.length === 6){
        displayText.innerHTML = `<p>Thank you for purchasing this item! <span>Item addes to chart: 4!</span></p>`
    }else if(availableShoes.length === 5){
        displayText.innerHTML = `<p>Thank you for purchasing this item! <span>Item addes to chart: 5!</span></p>`
    }else if(availableShoes.length === 4){
        displayText.innerHTML = `<p>Thank you for purchasing this item! <span>Item addes to chart: 6!</span></p>`
    }else if(availableShoes.length === 3){
        displayText.innerHTML = `<p>Thank you for purchasing this item! <span>Item addes to chart: 7!</span></p>`
    }else if(availableShoes.length === 2){
        displayText.innerHTML = `<p>Thank you for purchasing this item! <span>Item addes to chart: 8!</span></p>`
    }else if(availableShoes.length === 1){
        displayText.innerHTML = `<p>Thank you for purchasing this item! <span>Item addes to chart: 9!</span></p>`
    }else{
        displayText.innerHTML = `<p>We are out of stock!</p>`
    }
})
