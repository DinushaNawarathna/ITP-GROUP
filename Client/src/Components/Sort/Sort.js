import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import all_product from '../../assets/products/all_products';
import './Sort.css'

const Sort = () => {
  const [filters, setFilters] = useState({
    category: '',
    brand: '',
  });
  const Navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleFilter = () => {
    const filteredProducts = all_product.filter((product) => {
      return (
        (filters.category === '' || product.category === filters.category) &&
        (filters.brand === '' || product.brand === filters.brand)
      );
    });
    // Pass filtered products to the next page
    Navigate('/filtered-products', { state: { filteredProducts } });
  };

  return (
    <div className='FilterProduct'>
        <div>
            <h3>Category:</h3>
            <div className='category-select'>
                <label>
                <input type="radio" name="category" value="" onChange={handleChange} checked={filters.category === ''} />
                All
                </label>
                {[...new Set(all_product.map(product => product.category))].map((category, index) => (
                <label key={index}>
                    <input type="radio" name="category" value={category} onChange={handleChange} checked={filters.category === category} />
                    {category}
                </label>
                ))}
            </div>
        </div>
        <br />
        <div>
            <h3>Brand:</h3>
            < div className='brand-select'>
                <label>
                <input type="radio" name="brand" value="" onChange={handleChange} checked={filters.brand === ''} />
                All
                </label>
                {/* Add radio buttons for brands dynamically */}
                {[...new Set(all_product.map(product => product.brand))].map((brand, index) => (
                <label key={index}>
                    <input type="radio" name="brand" value={brand} onChange={handleChange} checked={filters.brand === brand} />
                    {brand}
                </label>
                ))}
            </div>
        </div>
      <br />
        <button className='Filter' onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Sort;

