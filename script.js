document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');
    const productTable = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    const newProductBtn = document.getElementById('newProductBtn');

    let products = [];

    // Função para adicionar um produto
    function addProduct(name, description, price, available) {
        products.push({ name, description, price: parseFloat(price), available });
        products.sort((a, b) => a.price - b.price);
        displayProducts();
    }

    // Função para exibir a lista de produtos
    function displayProducts() {
        productTable.innerHTML = '';
        products.forEach(product => {
            const row = productTable.insertRow();
            row.insertCell(0).textContent = product.name;
            row.insertCell(1).textContent = product.price.toFixed(2);
            row.insertCell(2).textContent = product.description;
        });
    }

    // Evento de submissão do formulário
    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const price = document.getElementById('price').value;
        const available = document.getElementById('available').value;

        addProduct(name, description, price, available);

        productForm.reset();
        document.querySelector('h2').scrollIntoView({ behavior: 'smooth' });
    });

    // Evento para o botão "Novo Produto"
    newProductBtn.addEventListener('click', () => {
        document.querySelector('h1').scrollIntoView({ behavior: 'smooth'});
});
});