'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Train = () => {
  return (
    <div className="w-full flex-row bg-[#06141d]">
      <motion.div
        style={{
          position: 'absolute',
          right: 0,
          backgroundColor: '#06141d',
          paddingTop: '20px',
        }}
        animate={{ x: '-100vw' }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-full">
          {' '}
          <Image alt="train" height={300} width={300} src="/assets/train.png" />
        </div>
      </motion.div>
    </div>
  )
}

export default Train
