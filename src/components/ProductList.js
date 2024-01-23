import React from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';
import { ThemeConsumer } from './context/ThemeContexts';

class ProductList extends React.Component {
  render() {
    return (
      <ThemeConsumer>
        {({ theme }) => (
          <div className={theme ? 'py-5 bg-slate-900' : 'py-5 bg-slate-200'}>
            <div className="container">
              <Title className="text-light" name="our" title="products" />
              <div className="row">
                <ProductConsumer>
                  {(value) => {
                    return value.products.map((product) => {
                      return <Product key={product.id} product={product} />;
                    });
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
        )}
      </ThemeConsumer>
    );
  }
}

export default ProductList;
