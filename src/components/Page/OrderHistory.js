import React from 'react';

const OrderHistory = () => {
    fetch('https://blooming-river-69896.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => {
            displayProducts(data);
        });

        function displayProducts(data){
            const productContainer = document.getElementById('product-list');
            for (let i = 0; i < data.length; i++) {
                const product = data[i];
                appendProduct(product, productContainer);
            }

        }
        function appendProduct(product, productContainer){
            const item = document.createElement('li');
            item.innerText = `${product.name}:$${product.price}:available:${product.stock}`;
            productContainer.appendChild(item);

        }

    return (
        <div>
            <h1>All orders</h1>
            <ul id="product-list">

            </ul>
        </div>
    );
};

export default OrderHistory;