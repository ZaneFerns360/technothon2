import React from 'react'

const About = () => {
  return (
    <div className="mx-auto flex h-screen w-4/6 flex-col items-center justify-center px-5 text-center">
      <h2 className="mb-5 text-7xl font-bold">About Technothon 2024⚡</h2>
      <p className="mb-5 text-2xl">
        {
          "Attention Mumbai polytechnic students! Get ready to unleash your inner developer at Technothon 2024, a 24-hour hackathon designed just for you. We're bringing back all the excitement from last year's event, with even more surprises this year. Prepare for a wild ride of developing amazing projects and pushing your creativity to new heights."
        }
      </p>
      <p className="mb-5 text-2xl">
        {
          "At Technothon, we're all about helping you become a development superstar. You'll learn how to build cool things from scratch, compete with other creators, and unlock your inner innovator. Are you ready for a challenge that will put your skills to the test?"
        }
      </p>
      <p className="text-2xl">
        {
          "This year, we're introducing a brand new feature: Blind Bet Registration! Register without knowing the specific challenges you'll be tackling. It's going to be an exhilarating adventure figuring it out together. So, are you ready to jump on this epic development journey? Join us at Technothon 2024, the craziest, most awesome hackathon ever!"
        }
      </p>
    </div>
  )
}

export default About
