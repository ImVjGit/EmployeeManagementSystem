import { Link , useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import styles from './Home.module.css';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';
const Home = () => {
  const signinLinkStyle = {
    color: '#0077FF',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginLeft: '10px'

  };

  const navigate = useNavigate();
 
function startRegister()
{
  navigate("/register");
}
  
  
  return (
    <div>
       <div className={styles.cardwrapper}>
        
        <Card title="Welcome to LiveVideo App" icon="logo">
          <p className={styles.textforp}>
            We’re working hard to get LiveVieo ready for everyone! while we wrap up the finishing youches,
            we’re adding people gradually to make sure nothing breaks
          </p>
          <div>
            <Button text="Get your username " onClick={startRegister} >
            </Button>
           
            <div className={styles.signiwrap}>
              <span className={styles.invite}>have an invite text?</span>
              <Link style={signinLinkStyle} to="/login">Sign in </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
   
  );
}

export default Home;