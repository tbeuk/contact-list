import React from 'react'

import { iconPropTypes } from '../iconCommonProps'

function AddIcon({ width, height, fillColor, className }) {
  return (
    <svg
      width={width}
      height={height}
      fill={fillColor}
      className={`addIcon ${className}`}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="9.81818182 8.18181818 9.81818182 1.33711224e-13 8.18181818 0 8.18181818 8.18181818 0 8.18181818 1.33711224e-13 9.81818182 8.18181818 9.81818182 8.18181818 18 9.81818182 18 9.81818182 9.81818182 18 9.81818182 18 8.18181818"></polygon>
    </svg>
  )
}

AddIcon.defaultProps = {
  className: '',
  width: 18,
  height: 18,
  fillColor: '#2DA1AD',
}

AddIcon.propTypes = iconPropTypes

export { AddIcon }
