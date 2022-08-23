import { FC } from 'react';
import { Product } from '../../types';

const ProductGrid: FC<Product> = ({ name, image, description, price }) => {
  return (
    <div className="gridContainer">
      <img className="gridImage" src={image} alt="productImage" />
      <strong className="gridName">{name}</strong>
      <span className="gridDescription">{description}</span>
      <span className="gridPrice">{price} €</span>
    </div>
  );
};

export default ProductGrid;
