import React from 'react'

const Usericon:React.FC<{color:string}> = ({color}) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="user">
<path id="Icon" d="M9.99967 11.6666C12.3009 11.6666 14.1663 9.8011 14.1663 7.49992C14.1663 5.19873 12.3009 3.33325 9.99967 3.33325C7.69849 3.33325 5.83301 5.19873 5.83301 7.49992C5.83301 9.8011 7.69849 11.6666 9.99967 11.6666ZM9.99967 11.6666C6.31778 11.6666 3.33301 13.9052 3.33301 16.6666M9.99967 11.6666C13.6816 11.6666 16.6663 13.9052 16.6663 16.6666" stroke={color} stroke-width="1.5" stroke-linecap="round"/>
</g>
</svg>

  )
}

export default Usericon