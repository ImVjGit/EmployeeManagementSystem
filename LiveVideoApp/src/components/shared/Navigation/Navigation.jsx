import React from 'react'
import {Link} from 'react-router-dom' 
import styles from './Navigation.module.css'
const Navigation = () => {

const brandStyle={
  color:'#fff',
  textDecoration:'none',
  fontwwight:'bold',
  fontSize:'32px',
  display:'flex',
  alignItem:'center'
};

const logo={
  marginLeft:'10px',
  marginTop:'20px'
};


  return (
    
    <nav className={'${styles.navbar} container '}>
    <Link style={brandStyle} to="/">
      <img  src="/images/logo.png" alt="logo"/> 
      <span style={logo} >LiveVideo</span>
    </Link>
    </nav>

  )
}

export default Navigation;