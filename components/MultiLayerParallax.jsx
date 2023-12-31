'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

export default function MultiLayerParallax() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%'])

  return (
    <div
      ref={ref}
      className="relative grid h-screen w-full place-items-center overflow-hidden"
    >
      <motion.div
        style={{ y: textY }}
        className="absolute inset-0 z-30"
        transition={{ type: 'spring', stiffness: 100, damping: 3000 }}
      >
        <div className="z-21 absolute inset-0 flex items-center justify-center">
          <Image alt="GG" width={400} height={400} src="/assets/GG.png"></Image>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-0"
        transition={{ type: 'spring', stiffness: 0, damping: 1000 }}
        style={{
          backgroundImage: `linear-gradient(rgba(129, 208, 212, 0.5), rgba(129, 208, 212, 0.5)), url(/assets/pnggg.jpg)`,
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          y: backgroundY,
        }}
      />

      <div
        className="absolute inset-0 z-20 w-full bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(/assets/sea-link.svg)`,
          backgroundPosition: 'bottom',
        }}
      />
    </div>
  )
}
