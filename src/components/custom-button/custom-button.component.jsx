import React from 'react'

import '../custom-button/custom-button.style.scss'

const CustomButton = ({ isGoogle, children, ...otherProps }) => (

    <button className={`${isGoogle ? 'google' : ''} custom-button`} {...otherProps}>
        {children}
    </button>

)

export default CustomButton