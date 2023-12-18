'use client'
import { Chrono } from 'react-chrono'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const items = [
  {
    cardTitle: 'Blind Bet Registration',
    cardSubtitle: 'Starts: December 17, 2023',
    cardDetailedText: 'Ends: December 31, 2023',
  },
  {
    cardTitle: 'Release of Problem Statements & Registration',
    cardSubtitle: 'Starts: January 2, 2024',
    cardDetailedText: 'Idea Submission Ends: January 15, 2024',
  },
  {
    cardTitle: 'Announcement and Webinar',
    cardSubtitle: 'Shortlisted Teams: February 4, 2024',
    cardDetailedText: 'Webinar with PS Setter: February 10, 2024',
  },
  {
    cardTitle: 'Grand Finale',
    cardSubtitle: 'Starts: February 17, 2024',
    cardDetailedText: 'Ends & Winner Declaration: February 18, 2024',
  },
]

const Timeline = () => {
  const [ref2, inView2] = useInView({
    threshold: 0,
    triggerOnce: false,
  })

  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.65 },
  }

  return (
    <motion.div
      animate={inView2 ? 'visible' : 'hidden'}
      variants={variants}
      exit="hidden"
      transition={{ duration: 0.5 }}
      ref={ref2}
    >
      <div className="max-sm:pt-96">
        <h3 className="pb-4 text-center text-3xl font-bold text-white">
          Timeline
        </h3>
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          itemWidth={150}
          cardHeight={100}
          theme={{
            primary: 'white',
            secondary: 'yellow',
            cardBgColor: '#c0e7e9',
            cardForeColor: 'white',
            titleColor: 'white',
            titleColorActive: 'blue',
            cardTitle: '5rem',
            cardText: '4rem',
            cardSubtitle: '2rem',
            title: '6rem',
          }}
        />
      </div>
    </motion.div>
  )
}

export default Timeline
