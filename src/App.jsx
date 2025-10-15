import React, { useState } from 'react';

const products = [
  { name: 'Ball Pen', price: 25, category: 'Stationery' },
  { name: 'Notebook', price: 99, category: 'Stationery' },
  { name: 'Highlighter', price: 40, category: 'Stationery' },
  { name: 'School Backpack', price: 799, category: 'Bags' },
  { name: 'Tote Bag', price: 499, category: 'Bags' },
  { name: 'Laptop Sleeve', price: 1299, category: 'Bags' },
  { name: 'Smartphone', price: 15999, category: 'Electronics' }
];

const categories = ['All', 'Stationery', 'Bags', 'Electronics'];

function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter(product => product.category === selectedCategory);

  return (
    <div>
      <h2>Product List</h2>
      <div>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            style={{
              margin: '5px',
              fontWeight: selectedCategory === category ? 'bold' : 'normal'
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <ul>
        {filteredProducts.map((product, idx) => (
          <li key={idx}>
            <strong>{product.name}</strong> | Price: ₹{product.price} | Category: {product.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
