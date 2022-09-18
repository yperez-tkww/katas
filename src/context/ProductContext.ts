import { createContext } from 'react';
import products from '../mocks/products.json';
import { Product } from '../types';

//TODO: ?? Initialize & Context.Provider value are the same. Is it correct?
const ProductContext = createContext<Product[]>(products);

export default ProductContext;
