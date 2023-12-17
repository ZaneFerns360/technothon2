import React from 'react'

const About = () => {
  return (
    <div className="mx-auto flex h-screen w-4/6 flex-col items-center justify-center px-5 text-center">
      <h2 className="mb-5 text-3xl font-bold sm:text-7xl">
        About Technothon 2024⚡
      </h2>
      <div className="leading-relaxed">
        {' '}
        <p className="mb-5 text-2xl sm:text-3xl">
          {
            'Mumbai polytechnic students, gear up for Technothon 2024! A 24-hour hackathon packed with excitement, surprises, and a chance to push your creativity to new heights.'
          }
        </p>
        <p className="mb-5 text-2xl sm:text-3xl">
          {
            'Technothon is your platform to shine as a developer. Build from scratch, compete with peers, and unlock your innovator within. Ready for a skill-testing challenge?'
          }
        </p>
        <p className="text-2xl sm:text-3xl">
          {
            'This year features Blind Bet Registration! Register and discover your challenges on the spot. Embark on this thrilling journey at Technothon 2024, the most exciting hackathon yet!'
          }
        </p>
      </div>
    </div>
  )
}

export default About
