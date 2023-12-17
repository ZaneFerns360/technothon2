'use client'
import { Accordion } from 'flowbite-react'

const Accordionx = () => {
  return (
    <div className="mx-auto flex items-center justify-center pt-24 max-sm:px-5 sm:w-1/2">
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>
            What will be the mode of Technothon 2024?
          </Accordion.Title>
          <Accordion.Content>
            Technothon 2024 will be conducted in an offline format. The event
            will be hosted offline at V.E.S. Polytechnic College. Please refer
            to the Reach Us section for the address.
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Who is the organizer of Technothon 2024?
          </Accordion.Title>
          <Accordion.Content>
            Technothon 2024 is organized by Vivekanand Education Society&apos;s
            Polytechnic in association with VESP Alumni Association and IIC
            Cell.
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Do I need to pay any registration fees?
          </Accordion.Title>
          <Accordion.Content>
            No, there are no registration fees. You just need to come with your
            innovation; your accommodation and food during the 24-hours are all
            on us.
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>How do we form a team?</Accordion.Title>
          <Accordion.Content>
            All team members should be from the same college; no inter-college
            teams are allowed. The team should be of four members and should
            include a minimum of one female member.
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Will I be getting travel reimbursement?
          </Accordion.Title>
          <Accordion.Content>
            We regret to inform you that we won&apos;t be providing travel
            reimbursement. We would be happy to provide food and accommodation
            during the 24-hour grand finale.
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Will I get anything even if I don’t win?
          </Accordion.Title>
          <Accordion.Content>
            Yes, all the participants get an E-Participation Certificate along
            with learning experience to compete in a hackathon.
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What is Blind Bet Registration?</Accordion.Title>
          <Accordion.Content>
            Blind Bet Registration is a unique process where teams register
            without knowing the specific problem statements. Teams registered
            during this period get preference in the shortlisting process. Find
            out more in the “PROBLEM STATEMENTS” section.
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            How to participate in Blind Bet Registration?
          </Accordion.Title>
          <Accordion.Content>
            Form your team. Only the team leader needs to fill the Blind Bet
            Registration Form. A unique Team ID will be sent to the team
            leader&apos;s email. Use the Team ID to submit your idea during the
            Idea Submission phase after problem statements are revealed in
            January. Get preference over your competitors by participating in
            Blind Bet Registration.
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Does Blind Bet Registration guarantee shortlistment for the finale?
          </Accordion.Title>
          <Accordion.Content>
            No, Blind Bet Registration does not guarantee shortlistment for the
            finale but increases the probability of getting shortlisted.
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  )
}

export default Accordionx
