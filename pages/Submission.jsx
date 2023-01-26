import React from 'react'
import Header from '../components/Header/Header'
import styles from "@/styles/Home.module.css";
const Submission = () => {
  return (
    <div>
        <Header />
        <div className={styles.secondpage_outer}>
        <div className={styles.center}>
            <h1>Your vote has been submitted</h1>
            </div>
        </div>
    </div>
  )
}

export default Submission