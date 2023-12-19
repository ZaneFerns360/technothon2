'use client'
import { useState } from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'

const guidelines = [
  {
    title: 'Eligibility',
    content:
      'All students pursuing a diploma in any stream of engineering are welcome to participate in Technothon 2024. Participants should be students of a registered polytechnic in and around Mumbai.',
  },
  {
    title: 'Team Formation',
    content:
      'All team members must belong to the same college. Inter-college teams are not permitted. A team should comprise four members. This includes the team leader. At least one female member is mandatory on each team.',
  },
  {
    title: 'Idea Submission',
    content:
      "After your team finalizes a problem statement, it's time to submit your innovative idea. During the registration, present your idea in the form of an abstract and proposal. Choose from the following formats for your submission: PDF, PPT, Video Presentation.",
  },
  {
    title: 'After Being Shortlisted',
    content:
      'If your team is shortlisted for The Grand Finale, a 24-hour Hackathon, you are expected to turn your proposed solution into reality. We encourage participants to have a substantial portion of their proposed solutions implemented—ideally aiming for at least 65% completion—transforming concepts into tangible products or prototypes during the event.',
  },
  {
    title: 'Documents for Shortlisted Teams',
    content:
      'College Identity Cards of individual team members. Any Government ID Card of individual team members. A consent form duly filled by individual team members (to be shared with the selected team). Participation confirmation letter from the college authority on college letterhead (one per team).',
  },
]

export default function Guidelines() {
  const [current, setCurrent] = useState(0)

  return (
    <div className="pt-10 md:px-4">
      <div className="m-4 flex flex-col items-center justify-center rounded-lg bg-blue-600 p-4 md:flex-row">
        <div className="w-full p-4 md:w-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-2 text-center text-3xl font-bold">
                {guidelines[current].title}
              </h2>
              <p className="text-center text-lg">
                {guidelines[current].content}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-4 flex justify-center space-x-4">
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              onClick={() =>
                setCurrent(current > 0 ? current - 1 : guidelines.length - 1)
              }
            >
              <FaArrowLeft />
            </button>
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              onClick={() =>
                setCurrent(current < guidelines.length - 1 ? current + 1 : 0)
              }
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
