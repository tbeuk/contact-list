import React from 'react'
import PropTypes from 'prop-types'

function PhoneIcon({ width, height, strokeColor, className }) {
  return (
    <svg
      width={width}
      height={height}
      stroke={strokeColor}
      fill="none"
      className={`phoneIcon ${className}`}
      viewBox="0 0 15 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.05470677,0.977867672 L1.06017021,1.94795357 C0.534951119,2.82298303 0.654191045,4.12943374 1.19971286,5.55748572 C1.80084499,7.13111285 2.94449942,8.85953028 4.51760395,10.4326348 C6.09070848,12.0057393 7.81912591,13.1493938 9.39275304,13.7505259 C10.8252582,14.2977488 12.1354024,14.4160271 13.0104585,13.8851363 L14.0537021,12.8976651 L10.9522757,9.7962387 L9.80367369,10.9448407 C8.64661842,10.1293266 7.46390017,9.13629034 6.32072624,7.99311641 C5.41834816,7.09073832 4.60951994,6.16374136 3.90776082,5.24420233 L5.14987699,4.00208616 L2.05470677,0.977867672 Z"></path>
    </svg>
  )
}

PhoneIcon.defaultProps = {
  className: '',
  width: 15,
  height: 16,
  strokeColor: '#2DA1AD',
}

PhoneIcon.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  strokeColor: PropTypes.string,
}

export { PhoneIcon }
