import { FC } from 'react';
import { Product } from '../../types';

const ProductCardGrid: FC<Product> = ({ name, image, description, price }) => {
  return (
    <div className="cardGridContainer">
      <img className="productGridImage" src={image} alt="productImage" />
      <strong className="productGridName">{name}</strong>
      <span className="productGridDescription">{description}</span>
      <span className="productGridPrice">{price} €</span>
      <button>Add to cart 🤑</button>
    </div>
  );
};

export default ProductCardGrid;
