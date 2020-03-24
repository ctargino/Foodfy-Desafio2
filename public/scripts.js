const cards = document.querySelectorAll('.card')
const hides = document.querySelectorAll('.hide')


for (let card of cards) {
    card.addEventListener("click", function () {
        const recipe_id = card.getAttribute("id")
        
        window.location.href = `/recipe?id=${recipe_id}`
    })
}
