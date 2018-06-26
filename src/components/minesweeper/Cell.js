import React from 'react';
import PropTypes from 'prop-types';

class Cell extends React.Component {
  static propTypes = {
    value: PropTypes.shape({
      isRevealed: PropTypes.bool,
      isMine: PropTypes.bool,
      isFlagged: PropTypes.bool,
    }),
    onClick: PropTypes.func,
    cMenu: PropTypes.func,
  };

  getValue() {
    const { value } = this.props;

    if (!value.isRevealed) {
      return this.props.value.isFlagged ? '🚩' : null;
    }
    if (value.isMine) {
      return '💣';
    }
    if (value.neighbour === 0) {
      return null;
    }
    return value.neighbour;
  }

  render() {
    const { value, onClick, cMenu } = this.props;
    let className =
      'cell' +
      (value.isRevealed ? '' : ' hidden') +
      (value.isMine ? ' is-mine' : '') +
      (value.isFlagged ? ' is-flag' : '');

    return (
      <div onClick={onClick} className={className} onContextMenu={cMenu}>
        {this.getValue()}
      </div>
    );
  }
}

export default Cell;
