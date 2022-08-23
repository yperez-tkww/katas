import { FC } from 'react';

import { Products } from '../../types';
import ProductGrid from '../ProductGrid.tsx/ProductCard';

const ProductCard: FC<Products> = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <div className="cardContainer" key={product.id}>
          <ProductGrid {...product} />
        </div>
      ))}
    </>
  );
};

export default ProductCard;
