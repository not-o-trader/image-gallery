import React from 'react';
import ArrowStyle from '../styled-components/ArrowStyle.jsx'

const Arrow = ({direction, clickFunction, glyph}) => (
  <div
    className={ `slide-arrow` }
    onClick= { clickFunction }>
    <ArrowStyle>
    <button>
    {glyph}
    </button>
    </ArrowStyle>
  </div>
);

export default Arrow;