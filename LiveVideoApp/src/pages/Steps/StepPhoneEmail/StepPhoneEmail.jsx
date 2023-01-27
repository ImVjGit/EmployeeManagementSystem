import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/shared/Button/Button'
import Card from '../../../components/shared/Card/Card'
import styles from './StepPhoneEmail.module.css'
const StepPhoneEmail = ({onNext}) => {
  return (
    <div>
     
   
    

<div className={styles.cardwrapper}>
    <Card title="Enter Your Number " icon="Phone">
    <input className={styles.alignall} type="text"  placeholder='  Enter Your Number '/>
    <div>
    <div className={styles.btn}>
    <Button text="Next " onClick={onNext} >
            </Button>
        </div>
    </div>
    </Card></div>
    </div>
  )
}

export default StepPhoneEmail