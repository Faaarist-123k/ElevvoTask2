const categoryButtons = document.querySelectorAll(".categories button");
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

// Category filter
categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        categoryButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const category = btn.dataset.category;

        cards.forEach(card => {
            const categoryText = card.querySelector("small").textContent;
            if (category === "All" || categoryText.includes(category)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// Search filter
searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();
    cards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = title.includes(searchValue) ? "block" : "none";
    });
});
