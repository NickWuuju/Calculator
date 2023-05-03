import React from 'react'
import data from './dataHeaderCalculator.json'
import styles from './styles/stylesHeaderCalculator.module.css'
import { Kanit } from '@next/font/google'
import { Timmana } from '@next/font/google'


const inter = Kanit ({ 
  subsets: ["latin"], 
  weight: ["100","200","300","400","500","600","700","800","900"]
})

const Timman = Timmana ({ 
  subsets: ["latin"], 
  weight: ["400"]
})

const HeaderCalculator = () => {

  return (
    <main className={styles.mainHeader}>
        <section className={styles.logoHeader}>
          <a href="../../App">
            <img src={data.icon} alt="" />
          </a>
        </section>
        <section className={`${styles.titleHeader}`}>
            <h3><a className={`${styles.textOne} ${inter.className}`} href="../../App">{data.titleOne}</a></h3>
            <h3><a className={`${styles.textTwo} ${inter.className}`} href="../../App">{data.titleTwo}</a> </h3>
        </section>
    </main>
  )
}

export default HeaderCalculator