import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button/Button';
import Card from '../../components/shared/Card/Card';
import StepAvtar from '../Steps/StepAvtar/StepAvtar';
import StepName from '../Steps/StepName/StepName';
import StepOtp from '../Steps/StepOtp/StepOtp';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
import StepUsername from '../Steps/StepUsername/StepUsername';
import styles from './Register.module.css'
const steps={
  1:StepPhoneEmail,
  2:StepOtp,
  3:StepName,
  4:StepAvtar,
  5:StepUsername,  
}


const Register = () => {
  // const Navigate =useNavigate(); 
  // function sendingOtp(){
  //   Navigate.push('/otpPage');
    
  // }

const [step,setStep]= useState(1);
const Step = steps[step]
 function onNext()
{
  setStep(step+1);
}

  return (
    <div >
    {/* <div className={styles.choose}>
    Phone131
    */}
<Step onNext={onNext} />
    </div>    
  )
}

export default Register;