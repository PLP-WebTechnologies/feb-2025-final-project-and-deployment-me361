function addToCart(productName) {
    alert(productName + " added to cart!");
}

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
});
