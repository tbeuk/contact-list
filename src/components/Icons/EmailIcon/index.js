import React from 'react'

import { iconPropTypes } from '../iconCommonProps'

function EmailIcon({ width, height, fillColor, className }) {
  return (
    <svg
      width={width}
      height={height}
      fill={fillColor}
      className={`emailIcon ${className}`}
      viewBox="0 0 15 10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15,0 L15,10 L0,10 L0,0 L15,0 Z M14,1.415 L7.5,5.59440418 L1,1.416 L1,9 L14,9 L14,1.415 Z M12.796,1 L2.203,1 L7.5,4.40559582 L12.796,1 Z"></path>
    </svg>
  )
}

EmailIcon.defaultProps = {
  className: '',
  width: 15,
  height: 10,
  fillColor: '#2DA1AD',
}

EmailIcon.propTypes = iconPropTypes

export { EmailIcon }
