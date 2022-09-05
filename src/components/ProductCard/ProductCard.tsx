import { FC } from 'react';

import { Products } from '../../types';
import ProductGrid from '../ProductGrid.tsx/ProductCard';

const ProductCard: FC<Products> = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <ProductGrid {...product} key={product.id} />
      ))}
    </>
  );
};

export default ProductCard;
