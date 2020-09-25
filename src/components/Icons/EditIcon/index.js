import React from 'react'

import { iconPropTypes } from '../iconCommonProps'

function EditIcon({ width, height, fillColor, className }) {
  return (
    <svg
      width={width}
      height={height}
      fill={fillColor}
      className={`editIcon ${className}`}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="All-contacts-mobile"
        transform="translate(-291.000000, -292.000000)"
        fill="#BBC4C3"
        fillRule="nonzero"
      >
        <g id="Icon-/-edit" transform="translate(291.000000, 291.000000)">
          <path
            d="M16,16 L16,17 L0,17 L0,16 L16,16 Z M13.7885822,1.76776695 C14.764893,2.74407768 14.764893,4.32699013 13.7885822,5.30330086 L13.4350288,5.65685425 L6.36396103,12.7279221 L1.76776695,13.7885822 L2.82842712,9.19238816 L9.89949494,2.12132034 L9.89976695,2.12153391 L10.2530483,1.76776695 C11.2293591,0.791456224 12.8122715,0.791456224 13.7885822,1.76776695 Z M3.39711609,11.1752907 L3.10193336,12.4544158 L4.38105851,12.1592331 L3.39711609,11.1752907 Z M10.252767,3.18153391 L3.53553391,9.89949494 L4.24276695,10.6065339 L9.89949494,4.94974747 L10.6066017,5.65685425 L4.94976695,11.3135339 L5.65685425,12.0208153 L12.374767,5.30353391 L10.252767,3.18153391 Z M10.9601551,2.47487373 L13.0814755,4.59619408 C13.6672619,4.01040764 13.6672619,3.06066017 13.0814755,2.47487373 C12.495689,1.8890873 11.5459415,1.8890873 10.9601551,2.47487373 Z"
            id="Combined-Shape"
          ></path>
        </g>
      </g>
    </svg>
  )
}

EditIcon.defaultProps = {
  className: '',
  width: 16,
  height: 18,
  fillColor: '#BBC4C3',
}

EditIcon.propTypes = iconPropTypes

export { EditIcon }
