import React from 'react'
import all_product from '../../../assets/products/all_products';
import Item from '../../../Components/OnlineShop/item/item';
import './ProductCategory.css';

const ProductCategory = (props) => {
    let category = props.category;

    if(category === 'Car_care'){
        category = 'Car Care Products';
    }else if(category === 'Interiour'){
        category = 'Interiour Spare Parts';
    }else if(category === 'Exteriour'){
        category = 'Exteriour Spare Parts';
    }

  return (
    <div className='product-category'>
        <div className='title'>
            <h1>{category}</h1>
        </div>
        <div className='products'>
            {all_product.map((item, i) => {
                if(props.category===item.category){
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                }else {
                    return null;
                }
            })}
        </div>
    </div>
  )
}

export default ProductCategory