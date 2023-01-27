import React from 'react'
import Button from '../../../components/shared/Button/Button'
import Card from '../../../components/shared/Card/Card'
import styles from './StepOtp.module.css'
const StepOtp = ({onNext}) => {
  return (
    <div>
    <div className={styles.cardwrapper}>
    <Card title="Enter Otp " icon="Lock">
    <input className={styles.alignall} type="text"  />
    <input className={styles.alignall} type="text"  />
    <input className={styles.alignall} type="text"  />
    <input className={styles.alignall} type="text"  />
    <div>
    
    <div className={styles.btn}>
    <Button text="Next " onClick={onNext} >
            </Button>
        </div>
        
    </div>
    </Card></div></div>
  )
}

export default StepOtp