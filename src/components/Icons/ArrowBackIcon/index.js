import React from 'react'

import { iconPropTypes } from '../iconCommonProps'

function ArrowBackIcon({ width, height, fillColor, className }) {
  return (
    <svg
      width={width}
      height={height}
      fill={fillColor}
      className={`arrowBackIcon ${className}`}
      viewBox="0 0 16 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.56826113,7.60940232 L4.4546089,8.69645979 L0,4.3482299 L4.4546089,-1.42108547e-14 L5.56826113,1.08705747 L2.761,3.827 L16,3.82729268 L16,12 L14.4250579,12 L14.4250579,5.3646241 L3.268,5.364 L5.56826113,7.60940232 Z"></path>
    </svg>
  )
}

ArrowBackIcon.defaultProps = {
  className: '',
  width: 16,
  height: 12,
  fillColor: '#BBC4C3',
}

ArrowBackIcon.propTypes = iconPropTypes

export { ArrowBackIcon }
