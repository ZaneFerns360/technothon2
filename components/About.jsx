import React from 'react'

const About = () => {
  return (
    <div className="mx-auto flex h-screen w-4/6 flex-col items-center justify-center px-5 text-center max-sm:pt-36">
      <h2 className="mb-5 text-3xl font-bold max-sm:pt-64 sm:text-7xl">
        About Technothon 2024⚡
      </h2>
      <div className="leading-relaxed">
        <p className="mb-5 text-2xl sm:text-3xl">
          {
            'Mumbai polytechnic students, get ready for Technothon 2024! A 24-hour hackathon full of excitement and creativity.'
          }
        </p>
        <p className="mb-5 text-2xl sm:text-3xl">
          {
            'Technothon is your chance to shine as a developer. Build from scratch, compete, and unlock your potential. Are you up for the challenge?'
          }
        </p>
        <p className="text-2xl sm:text-3xl">
          {
            'This year, we introduce Blind Bet Registration! Register, discover your challenges on the spot, and embark on an exciting journey at Technothon 2024.'
          }
        </p>
      </div>
    </div>
  )
}

export default About
