import React from 'react';
import ProductList from '../voting/ProductList';

const Voting = () => (
  <div className="main ui text container">
    <h1 className="ui dividing centered header">Popular Products</h1>
    <div id="content">
      <ProductList />
    </div>
  </div>
);

export default Voting;
