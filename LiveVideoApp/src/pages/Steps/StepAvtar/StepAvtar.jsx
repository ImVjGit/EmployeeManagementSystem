import React from 'react'
import Button from '../../../components/shared/Button/Button'
import Card from '../../../components/shared/Card/Card'
import styles from './StepAvtar.module.css'
const StepAvtar = ({onNext}) => {
  return (
    <div>
       <div className={styles.cardwrapper}>
    <Card title="Upload Image  " icon="Smile">
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

export default StepAvtar