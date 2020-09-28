import React from 'react'

import { iconPropTypes } from '../iconCommonProps'

function UploadIcon({ width, height, fillColor, className }) {
  return (
    <svg
      width={width}
      height={height}
      fill={fillColor}
      className={`uploadIcon ${className}`}
      viewBox="0 0 21 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2,13.1813955 L2,18.768352 L21,18.768352 L21,13.1813955 L22,13.1813955 L22,19.768352 L1,19.768352 L1,13.1813955 L2,13.1813955 Z M11.5,0.128094614 L16.8033009,5.43139547 L16.0961941,6.13850225 L11.999,2.04209461 L12,14 L11,14 L10.999,2.04209461 L6.90380592,6.13850225 L6.19669914,5.43139547 L11.5,0.128094614 Z"></path>
    </svg>
  )
}

UploadIcon.defaultProps = {
  className: '',
  width: 25,
  height: 20,
  fillColor: '#FFFFFF',
}

UploadIcon.propTypes = iconPropTypes

export { UploadIcon }
