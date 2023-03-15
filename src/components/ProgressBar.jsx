import React from 'react'
import styles from './ProgressBar.module.css'


function ProgressBar({value}) {
    return (
        <div className={styles.container}>
            <div className={styles.progressBarContainer}>
                <div className={styles.progressBar} style={{width: `${value}%`}}>

                </div>
            </div>
        </div>
    )
}

export default ProgressBar
