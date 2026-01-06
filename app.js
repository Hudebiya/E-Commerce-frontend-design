function changeImage(src) {
    const mainImg = document.getElementById('mainProductImg');
    if (mainImg) {
        mainImg.src = src;
    }
}

const addToCart = () => {
    const titleElement = document.querySelector('h3');
    const imgElement = document.getElementById('mainProductImg');

    if (!titleElement || !imgElement) {
        console.error("Product details nahi mil rahi hain!");
        return;
    }

    const product = {
        id: Date.now(),
        name: titleElement.innerText,
        price: 1357.97, 
        image: imgElement.src,
        qty: 1
    };

    let cart = JSON.parse(localStorage.getItem('myCart')) || [];
    cart.push(product);
    localStorage.setItem('myCart', JSON.stringify(cart));

    alert("Success! Item has been added to your cart.");
    window.location.href = "cart.html";
};

const displayCart = () => {
    const cartItemsContainer = document.getElementById('cart-items');
    if (!cartItemsContainer) return;

    let cart = JSON.parse(localStorage.getItem('myCart')) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<tr><td colspan='5' class='text-center p-5'>Your cart is empty!</td></tr>";
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <tr class="align-middle border-bottom">
            <td>
                <div class="d-flex align-items-center">
                    <img src="${item.image}" width="60" class="me-3 border rounded">
                    <h6 class="mb-0 small">${item.name}</h6>
                </div>
            </td>
            <td>$${item.price}</td>
            <td>${item.qty}</td>
            <td class="fw-bold">$${(item.price * item.qty).toFixed(2)}</td>
            <td>
                <button class="btn btn-sm btn-outline-danger" onclick="removeItemFromCart(${item.id})">
                    <i class="fa fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
};

window.removeItemFromCart = (id) => {
    let cart = JSON.parse(localStorage.getItem('myCart')) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('myCart', JSON.stringify(cart));
    displayCart();
};

document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript Load Ho Gayi Hai!");

    const addBtn = document.getElementById('add-to-cart-btn');
    if (addBtn) {
        console.log("Add to Cart button mil gaya!");
        addBtn.addEventListener('click', addToCart);
    }

    const cartContainer = document.getElementById('cart-items');
    if (cartContainer) {
        displayCart();
    }
});

const calculateTotal = (cart) => {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const tax = subtotal * 0.05; 
    const total = subtotal + tax;

    if(document.getElementById('subtotal')) document.getElementById('subtotal').innerText = `$${subtotal.toFixed(2)}`;
    if(document.getElementById('total-price')) document.getElementById('total-price').innerText = `$${total.toFixed(2)}`;
};