import { FC } from 'react';
import { Product } from '../../types';

const ProductCardOverlay: FC<Product> = ({
  name,
  image,
  description,
  price,
}) => {
  return (
    <div
      className="cardOverlayContainer"
      style={{
        background: `url(${image})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="overlayContent">
        <strong className="productOverlayName">{name}</strong>
        <span className="productOverlayDescription">{description}</span>
        <span className="productOverlayPrice">{price} €</span>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCardOverlay;
