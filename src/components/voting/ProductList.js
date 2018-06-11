import React from 'react';

import Product from './Product';
import Seed from './Seed';

/**
 * A list of products.
 *
 * @class      ProductList (name)
 */
class ProductList extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.setState({ products: Seed });
  }

  handleProductUpVote = productId => {
    const nextProducts = this.state.products.map(product => {
      if (product.id === productId) {
        return Object.assign({}, product, { votes: product.votes + 1 });
      } else {
        return product;
      }
    });

    this.setState({ products: nextProducts });
  };

  render() {
    const products = this.state.products.sort((a, b) => b.votes - a.votes);

    const productComponents = products.map(product => (
      <Product
        key={'product-' + product.id}
        {...product}
        onVote={this.handleProductUpVote}
      />
    ));

    return <div className="ui unstackable items">{productComponents}</div>;
  }
}

export default ProductList;
