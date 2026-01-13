const products = [
    {
        id: 1,
        title: "Canon Camera EOS 2000D Black 15x zoom",
        price: "$998.00",
        oldPrice: "$1128.00",
        category: "Electronics",
        rating: 4.5,
        orders: 154,
        shipping: "Free Shipping",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "assets/Image/tech/6.png"
    },
    {
        id: 2,
        title: "GoPro HERO10 Black Action Camera",
        price: "$450.00",
        oldPrice: "$500.00",
        category: "Electronics",
        rating: 4.8,
        orders: 89,
        shipping: "Free Shipping",
        description: "Capture stunning 5.3K video and 23MP photos with high-performance action gear.",
        image: "assets/Image/tech/image 23.png"
    },
    {
        id: 3,
        title: "Samsung Galaxy Watch 4",
        price: "$299.00",
        oldPrice: "$350.00",
        category: "Electronics",
        rating: 4.2,
        orders: 210,
        shipping: "Standard Shipping",
        description: "Track your fitness and stay connected with this sleek smartwatch.",
        image: "assets/Image/tech/image 32.png"
    },
    {
        id: 4,
        title: "Apple MacBook Pro 14 M1 Chip",
        price: "$1999.00",
        oldPrice: "$2100.00",
        category: "Electronics",
        rating: 4.9,
        orders: 45,
        shipping: "Free Shipping",
        description: "The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro chip.",
        image: "assets/Image/tech/8.png"
    },
    {
        id: 5,
        title: "HP Laptop 15.6 inch HD Display",
        price: "$550.00",
        oldPrice: "$600.00",
        category: "Electronics",
        rating: 4.0,
        orders: 120,
        shipping: "Free Shipping",
        description: "Reliable laptop for daily tasks and office work with long battery life.",
        image: "assets/Image/tech/image 34.png"
    },
    {
        id: 6,
        title: "Blue Coat for Men",
        price: "$45.00",
        oldPrice: "$80.00",
        category: "Clothes",
        rating: 4.4,
        orders: 300,
        shipping: "Standard Shipping",
        description: "Classic denim jacket that never goes out of style. Perfect for casual wear.",
        image: "assets/Layout/alibaba/Image/cloth/image 30.png" 
    },
    {
        id: 7,
        title: "Wireless Bluetooth Headphones",
        price: "$89.00",
        oldPrice: "$120.00",
        category: "Mobile accessory",
        rating: 4.6,
        orders: 540,
        shipping: "Free Shipping",
        description: "High-quality sound with noise cancellation technology and 20h battery.",
        image: "assets/Image/tech/image 32.png"
    },
    {
        id: 8,
        title: "Wallet",
        price: "$35.00",
        oldPrice: "$50.00",
        category: "Accessories",
        rating: 4.7,
        orders: 400,
        shipping: "Free Shipping",
        description: "Precision gaming mouse with customizable RGB lighting and 6 buttons.",
        image: "assets/Layout/alibaba/Image/cloth/image 24.png"
    },
    {
        id: 9,
        title: "Bag",
        price: "$75.00",
        oldPrice: "$90.00",
        category: "Accessories",
        rating: 4.7,
        orders: 1100,
        shipping: "Free Shipping",
        description: "Precision gaming mouse with customizable RGB lighting and 6 buttons.",
        image: "assets/Layout/alibaba/Image/cloth/image 26.png"
    },
    {
        id: 10,
        title: "Shirt",
        price: "$100.00",
        oldPrice: "$120.00",
        category: "Cloth",
        rating: 4.7,
        orders: 1100,
        shipping: "Free Shipping",
        description: "Good quality ,unique style for men.",
        image: "assets/Layout/alibaba/Image/cloth/Bitmap.png"
    }
];

function displayProducts(productsList) {
    const container = document.getElementById('product-list-container');
    const itemCount = document.getElementById('item-count');

    if (!container) return;

    container.innerHTML = ""; 

    if (itemCount) {
        itemCount.innerHTML = `${productsList.length} items found`;
    }

    if (productsList.length === 0) {
        container.innerHTML = `
            <div class="text-center py-5 w-100 border rounded bg-light">
                <i class="fa-solid fa-magnifying-glass mb-3 text-muted" style="font-size: 40px;"></i>
                <h3 class="text-muted">No results found!</h3>
                <p>Humain aapki search ke mutabiq kuch nahi mila.</p>
                <button onclick="displayProducts(products)" class="btn btn-primary btn-sm mt-2">
                    Show All Products
                </button>
            </div>
        `;
        return; 
    }
    
    productsList.forEach(product => {
        container.innerHTML += `
            <div class="card mb-3 border shadow-sm p-2">
                <div class="row g-0 align-items-center">
                    <div class="col-md-3 text-center">
                        <img src="${product.image}" class="img-fluid rounded" style="max-height: 150px;">
                    </div>
                    <div class="col-md-7 px-3">
                        <h6 class="fw-bold mb-1">${product.title}</h6>
                        <div class="d-flex align-items-center gap-2 mb-1">
                            <span class="fw-bold text-dark">${product.price}</span>
                            <span class="text-muted small text-decoration-line-through">${product.oldPrice}</span>
                        </div>
                        <p class="text-muted small mb-2" style="font-size: 12px;">${product.description}</p>
                        <a href="detail.html?id=${product.id}" class="text-primary text-decoration-none fw-bold small">View details</a>
                    </div>
                </div>
            </div>
        `;
    });
}

displayProducts(products);

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

const checkoutForm = document.getElementById('checkout-form');
if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        alert("Thank you! Your order has been placed successfully.");
        
        localStorage.removeItem('myCart');
        
        window.location.href = "index.html";
    });
}

const displayCheckoutSummary = () => {
    const summaryContainer = document.getElementById('checkout-items-summary');
    const totalContainer = document.getElementById('final-total');
    if (!summaryContainer) return;

    let cart = JSON.parse(localStorage.getItem('myCart')) || [];
    let subtotal = 0;

    summaryContainer.innerHTML = cart.map(item => {
        subtotal += item.price * item.qty;
        return `<div class="d-flex justify-content-between mb-2">
                    <span class="small">${item.name} (x${item.qty})</span>
                    <span class="small fw-bold">$${(item.price * item.qty).toFixed(2)}</span>
                </div>`;
    }).join('');

    if(totalContainer) totalContainer.innerText = `$${subtotal.toFixed(2)}`;
};

document.addEventListener('DOMContentLoaded', () => {
    displayCheckoutSummary();
});

const clearBtn = document.getElementById('clear-cart');
if (clearBtn) {
    clearBtn.addEventListener('click', () => {
        if (confirm("Are you sure you want to remove all items from your cart?")) {
            localStorage.removeItem('myCart'); 
            
            if (typeof displayCart === "function") {
                displayCart(); 
            } else {
                location.reload(); 
            }
            
            alert("Cart has been cleared.");
        }
    });
}

const searchInput = document.querySelector('.search-container input');
const searchBtn = document.querySelector('.search-container button');

if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        const query = searchInput.value.toLowerCase().trim();
        console.log("User ne search kiya:", query); 

        const filteredProducts = products.filter(product => 
            product.title.toLowerCase().includes(query)
        );

        console.log("Match hone wale products:", filteredProducts);
        displayProducts(filteredProducts);
    });
} else {
    console.log("Error: Search button or input field not found. Please ensure the '.search-container' class exists in your HTML.");
}

const filterLinks = document.querySelectorAll('.filter-link');

filterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 
        
        const category = link.getAttribute('data-category');
        console.log("Selected Category:", category);

        if (category === "all") {
            displayProducts(products); 
        } else {
            const filtered = products.filter(p => p.category === category);
            displayProducts(filtered); 
        }
    });
});

window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryFromHome = urlParams.get('category');

    if (categoryFromHome) {
        console.log("Home page se aayi hui category:", categoryFromHome);
        const filtered = products.filter(p => p.category === categoryFromHome);
        displayProducts(filtered);
    } else {
        displayProducts(products);
    }
};

const categoryDropdown = document.getElementById('category-dropdown');

if (categoryDropdown) {
    categoryDropdown.addEventListener('change', () => {
        const selectedValue = categoryDropdown.value;
        
        if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
            window.location.href = `shop.html?category=${selectedValue}`;
        } 
        else {
            if (selectedValue === "all") {
                displayProducts(products);
            } else {
                const filtered = products.filter(p => p.category === selectedValue);
                displayProducts(filtered);
            }
        }
    });
}