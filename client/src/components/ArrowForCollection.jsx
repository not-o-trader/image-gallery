import React from 'react';
import ArrowForCollectionStyle from '../styled-components/ArrowForCollectionStyle.jsx'

const ArrowForCollection = ({direction, clickFunction, glyph}) => (
  <div
    className={ `slide-arrow` }
    onClick= { clickFunction }>
    <ArrowForCollectionStyle>
    <button>
    {glyph}
    </button>
    </ArrowForCollectionStyle>
  </div>
);

export default ArrowForCollection;