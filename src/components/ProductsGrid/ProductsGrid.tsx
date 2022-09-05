import { FC } from 'react';

import { Products } from '../../types';
import ProductCardGrid from '../ProductCard.tsx/ProductCardGrid';
import ProductCardOverlay from '../ProductCard.tsx/ProductCardOverlay';

const ProductsGrid: FC<Products> = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <>
          <ProductCardGrid {...product} key={product.id} />
          <ProductCardOverlay {...product} key={product.id} />
        </>
      ))}
    </>
  );
};

export default ProductsGrid;
