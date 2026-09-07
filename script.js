const huntButton = document.getElementById("huntButton");
const message = document.getElementById("message");

huntButton.addEventListener("click", () => {
    message.textContent = "Охота началась! Монстр найден. Удачи, охотник!";
    huntButton.textContent = "Охота продолжается";
});
