'use client'
import { motion } from 'framer-motion'
import { styles } from '../styles'

const Video = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="z-0 mx-auto"
    >
      <div className=" h-screen w-screen overflow-hidden">
        <video className="w-full max-w-full " autoPlay muted loop>
          <source src="/assets/Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </motion.section>
  )
}

export default Video
