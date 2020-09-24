import React from 'react'

import { iconPropTypes } from '../iconCommonProps'

function DeleteIcon({ width, height, fillColor, className }) {
  return (
    <svg
      width={width}
      height={height}
      fill={fillColor}
      className={`deleteIcon ${className}`}
      viewBox="0 0 13 17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.02418308,0 L9.024,2 L13,2 L13,3 L11.847,3 L11.2317772,17 L1.66011466,17 L1.043,3 L0,3 L0,2 L4,2 L4,0 L9.02418308,0 Z M10.846,3 L2.044,3 L2.61707488,16 L10.274817,16 L10.846,3 Z M7,5 L7,14.6956522 L6,14.6956522 L6,5 L7,5 Z M9,5 L9,14.6956522 L8,14.6956522 L8,5 L9,5 Z M5,5 L5,14.6956522 L4,14.6956522 L4,5 L5,5 Z M8.01323353,1 L5,1 L5,1.91304348 L8.01323353,1.91304348 L8.01323353,1 Z"></path>
    </svg>
  )
}

DeleteIcon.defaultProps = {
  className: '',
  width: 13,
  height: 17,
  fillColor: '#BBC4C3',
}

DeleteIcon.propTypes = iconPropTypes

export { DeleteIcon }
