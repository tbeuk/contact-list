import React from 'react'

import { iconPropTypes } from '../iconCommonProps'

function PersonIcon({ width, height, fillColor, className }) {
  return (
    <svg
      width={width}
      height={height}
      fill={fillColor}
      className={`personIcon ${className}`}
      viewBox="0 0 15 15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.75,7.5 C11.7540644,7.5 15,10.7459356 15,14.75 L15,14.75 L14,14.75 C14,11.2982203 11.2017797,8.5 7.75,8.5 L7.75,8.5 L7.52087313,8.50412198 C4.1752368,8.62468809 1.5,11.3749265 1.5,14.75 L1.5,14.75 L0.5,14.75 C0.5,10.7459356 3.74593556,7.5 7.75,7.5 Z M7.5,0.5 C9.15685425,0.5 10.5,1.84314575 10.5,3.5 C10.5,5.15685425 9.15685425,6.5 7.5,6.5 C5.84314575,6.5 4.5,5.15685425 4.5,3.5 C4.5,1.84314575 5.84314575,0.5 7.5,0.5 Z M7.5,1.5 C6.3954305,1.5 5.5,2.3954305 5.5,3.5 C5.5,4.6045695 6.3954305,5.5 7.5,5.5 C8.6045695,5.5 9.5,4.6045695 9.5,3.5 C9.5,2.3954305 8.6045695,1.5 7.5,1.5 Z"></path>
    </svg>
  )
}

PersonIcon.defaultProps = {
  className: '',
  width: 15,
  height: 15,
  fillColor: '#2DA1AD',
}

PersonIcon.propTypes = iconPropTypes

export { PersonIcon }
