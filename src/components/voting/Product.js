import React from 'react';

class Product extends React.Component {
  handleUpVote = () => {
    this.props.onVote(this.props.id);
  };

  render() {
    const {
      productImageUrl,
      votes,
      url,
      title,
      description,
      submitterAvatarUrl,
    } = this.props;

    return (
      <div className="item">
        <div className="image">
          <img src={productImageUrl} alt="product" />
        </div>
        <div className="middle aligned content">
          <div className="header">
            <a onClick={this.handleUpVote}>
              <i className="large caret up icon" />
            </a>
            {votes}
          </div>
          <div className="description">
            <a href={url}>{title}</a>
            <p>{description}</p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img
              className="ui avatar image"
              src={submitterAvatarUrl}
              alt="avatar"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
