document.getElementById("search").addEventListener("input", function() {
    let filter = this.value.toLowerCase();
    let cards = document.querySelectorAll(".idea-card");

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();
        card.style.display = text.includes(filter) ? "block" : "none";
    });
});
