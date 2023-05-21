
fetch('product.json')
  .then(response => response.json())
  .then(data => {

    const products = data.products;
    

    const productContainer = document.querySelector('.product-container');
    products.forEach(product => {
      const productCard = createProductCard(product);
      productContainer.appendChild(productCard);
    });
  })
  .catch(error => {
    console.error('Error fetching product data:', error);
  });


function createProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('product-card');
  
  const image = document.createElement('img');
  image.src = product.image;
  image.alt = product.name;
  card.appendChild(image);
  
  const name = document.createElement('h3');
  name.textContent = product.name;
  card.appendChild(name);
  
  const price = document.createElement('p');
  price.textContent = 'Price: KRW ' + product.price.toFixed(2);
  card.appendChild(price);
  
  const description = document.createElement('p');
  description.textContent = product.description;
  card.appendChild(description);
  

  card.addEventListener('click', () => {
    showModal(product);
  });
  
  return card;
}


function showModal(product) {
  const modal = document.getElementById('product-modal');
  const modalImage = document.getElementById('modal-image');
  const modalName = document.getElementById('modal-name');
  const modalPrice = document.getElementById('modal-price');
  const modalDescription = document.getElementById('modal-description');
  
  modalImage.src = product.image;
  modalImage.alt = product.name;
  modalName.textContent = product.name;
  modalPrice.textContent = 'Price: KRW ' + product.price.toFixed(2);
  modalDescription.textContent = product.description;
  
  modal.style.display = 'block';
  
  const closeModal = document.getElementsByClassName('close')[0];
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}


function filterProducts() {
  const category = document.getElementById('category').value;
  const searchTerm = document.getElementById('searchTerm').value.toLowerCase();
  
  const filteredProducts = products.filter(product => {
    const matchesCategory = category === 'All' || product.category === category;
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearchTerm;
  });
  
  displayFilteredProducts(filteredProducts);
}


function displayFilteredProducts(filteredProducts) {
  const productContainer = document.querySelector('.product-container');
  productContainer.innerHTML = '';
  
  filteredProducts.forEach(product => {
    const productCard = createProductCard(product);
    productContainer.appendChild(productCard);
  });
}


const filterButton = document.getElementById('filterButton');
filterButton.addEventListener('click', filterProducts);