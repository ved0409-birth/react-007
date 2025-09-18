import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar' style={{backgroundColor:'blue', display:'flex',justifyContent:'space-between',alignItems:'center'}}>
<h1 className='logo'>logo  </h1>
<ul className='nav-items'style={{listStyleType:'none', display:'flex', gap:'10px'}}>
    <li>about </li>
    <li>home</li>
    <li>contact</li>
    <li>services</li>
    
</ul>
    </div>
    
  )
}

export default Navbar