import React, { useState } from 'react'
import StepOtp from '../Steps/StepOtp/StepOtp';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
import styles from './Login.module.css'
const steps = {
  11: StepPhoneEmail,
  12: StepOtp,
}
const Login = () => {
  const [step, setStep] = useState(11);
  const Step = steps[step]
  function onNext() {
    setStep(step + 1);
  }
  return (
    <div>Login
      <Step onNext={onNext} />
    </div>
  )
};

export default Login