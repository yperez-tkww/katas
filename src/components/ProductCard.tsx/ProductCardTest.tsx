import { FC } from 'react';
import { Product } from '../../types';

const ProductCardTest: FC = () => {
  return (
    <div className="row">
      <div className="column left">
        <h1>Column 1</h1>
      </div>
      <div className="column right">
        <h1>Column 2</h1>
        <p>text</p>
        <p>+text</p>
      </div>
    </div>
  );
};

export default ProductCardTest;
