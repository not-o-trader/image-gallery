import React from 'react';
import ArrowForCurrentStyle from '../styled-components/ArrowForCollectionStyle.jsx'

const ArrowForCurrent = ({direction, clickFunction, glyph}) => (
  <div
    className={ `slide-arrow ` }
    onClick= { clickFunction }>
    <ArrowForCurrentStyle>
    <button>
    {glyph}
    </button>
    </ArrowForCurrentStyle>
  </div>
);

export default ArrowForCurrent;