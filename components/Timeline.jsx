import PropTypes from 'prop-types'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { motion, AnimatePresence } from 'framer-motion'

import { styles } from '../styles.js'

import 'react-vertical-timeline-component/style.min.css'

import { TimelineData } from '../constants/index.js'

const TimelineEvent = ({ title, date, icon }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#1d1836',
      color: '#fff',
      padding: '50px',
    }}
    contentArrowStyle={{ borderRight: '7px solid  #232631' }}
    date={date}
    iconStyle={{ background: '#383E56', padding: '15px' }}
    icon={icon}
  >
    <div>
      <h3 className="text-[24px] font-bold text-white">{title}</h3>
    </div>
  </VerticalTimelineElement>
)

TimelineEvent.propTypes = {
  title: PropTypes.any.isRequired,
  date: PropTypes.any.isRequired,
  icon: PropTypes.element.isRequired,
}

export const Timeline = () => {
  const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 1.25,
          delay: delay,
        },
      },
    }
  }

  return (
    <>
      <AnimatePresence>
        <motion.div
          variants={textVariant()}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <p className={`${styles.sectionSubText} text-center`}>
            {' '}
            Event Timeline
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Important Dates.
          </h2>
        </motion.div>
      </AnimatePresence>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {TimelineData.map((event, index) => (
            <TimelineEvent
              key={`timeline-event-${index}`}
              title={event.title}
              date={event.date}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Timeline
