const categoryButtons = document.querySelectorAll("button[data-category]");
const movieCards = document.querySelectorAll("div[data-category]")

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.getAttribute('data-category');
        movieCards.forEach(card => {
            if (category === "all" || card.getAttribute('data-category') === category) {
                card.style.display = "block"
            } else {
                card.style.display = "none"
            }
        })
    })
})

console.log(categoryButtons);
console.log(movieCards);