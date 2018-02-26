import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ effect }) => {
  let count = 0;
  if (effect === 1 || effect === 4 || effect === 8) {
    count = 5;
  } else if (effect === 2 || effect === 5 || effect === 6) {
    count = 4;
  } else if (effect === 7) {
    count = 2;
  } else if (effect === 10) {
    count = 9;
  } else {
    count = 0;
  }
  return (
    <div className={`dw-loading dw-loading__preloader_${effect}`}>
      {
        Array(count).fill(count).map((item, index) => {
          const key = item - index;
          return <span key={key} />;
        })
      }
    </div>
  );
};

Loading.propTypes = {
  effect: PropTypes.number.isRequired,
};

export default Loading;
