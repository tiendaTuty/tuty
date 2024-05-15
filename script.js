document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalDisplay = document.querySelector('.total');
    let cartTotal = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = button.parentElement;
            const productId = product.dataset.id;
            const productName = product.dataset.name;
            const productPrice = parseFloat(product.dataset.price);

            // Create new item for cart
            const cartItem = document.createElement('li');
            cartItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;
            cartItemsContainer.appendChild(cartItem);

            // Update total
            cartTotal += productPrice;
            totalDisplay.textContent = `Total: $${cartTotal.toFixed(2)}`;
        });
    });

    const checkoutButton = document.querySelector('.checkout');
    checkoutButton.addEventListener('click', function() {
        // Replace this URL with your WhatsApp URL
        window.location.href = 'https://www.instagram.com/tuty_fashion?igsh=d3g5Z2dnOWQycnho'; // Replace 'whatsappphonenumber' with the actual WhatsApp number
    });
});
