import React from 'react'
import Button from '../../../components/shared/Button/Button'
import Card from '../../../components/shared/Card/Card'
import styles from './StepName.module.css'
const StepName = ({onNext}) => {
  return (
    <div>
     <div className={styles.cardwrapper}>
    <Card title="Enter Your Name " icon="Smile">
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

export default StepName