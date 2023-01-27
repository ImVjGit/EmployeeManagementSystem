
import React, { useState } from 'react'
import StepOtp from '../Steps/StepOtp/StepOtp';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
import styles from './Authenticate.module.css'
const steps = {
  11: StepPhoneEmail,
  12: StepOtp,
}
const Authenticate = () => {
  const [step, setStep] = useState(11);
  const Step = steps[step]
  function onNext() {
    setStep(step + 1);
  }
  return (
    <div>Authenticate
      <Step onNext={onNext} />
    </div> 
  )
};

export default Authenticate