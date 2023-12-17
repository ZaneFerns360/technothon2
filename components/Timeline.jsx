'use client'
import { Chrono } from 'react-chrono'

const items = [
  {
    title: 'December 2023',
    cardTitle: 'Blind Bet Registration',
    cardSubtitle: 'Starts: December 17, 2023',
    cardDetailedText: 'Ends: December 31, 2023',
  },
  {
    title: 'January 2024',
    cardTitle: 'Release of Problem Statements & Registration',
    cardSubtitle: 'Starts: January 2, 2024',
    cardDetailedText: 'Idea Submission Ends: January 15, 2024',
  },
  {
    title: 'February 2024',
    cardTitle: 'Announcement and Webinar',
    cardSubtitle: 'Shortlisted Teams: February 4, 2024',
    cardDetailedText: 'Webinar with PS Setter: February 10, 2024',
  },
  {
    title: 'February 2024',
    cardTitle: 'Grand Finale',
    cardSubtitle: 'Starts: February 17, 2024',
    cardDetailedText: 'Ends & Winner Declaration: February 18, 2024',
  },
]

const Timeline = () => {
  return (
    <Chrono
      items={items}
      mode="VERTICAL_ALTERNATING"
      itemWidth={150}
      theme={{
        primary: 'blue',
        secondary: 'lightblue',
        cardBgColor: '#81D0D4',
        cardForeColor: 'white',
        titleColor: 'white',
        titleColorActive: 'blue',
      }}
    />
  )
}

export default Timeline
