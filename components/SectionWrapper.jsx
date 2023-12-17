'use client'
import { motion } from 'framer-motion'
import { styles } from '../styles'

const StarWrapper = ({ children }) => {
  const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    }
  }

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className={`${styles.padding} relative z-0 mx-auto max-w-7xl`}
    >
      <span className="hash-span" id="idName">
         
      </span>

      {children}
    </motion.section>
  )
}

export default StarWrapper
