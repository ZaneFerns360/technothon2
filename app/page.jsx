import Image from 'next/image'
import MultiLayerParallax from '@components/MultiLayerParallax'
import Video from '@components/Video'
import About from '@components/About'
import StarWrapper from '@components/SectionWrapper'
import Timeline from '@components/Timeline'
import Accordionx from '@components/Accrodion'
import ContactUs from '@components/Contact'
import Container from '@components/Container'

export default function Home() {
  return (
    <div>
      <MultiLayerParallax />
      <div className="w-full bg-[#06141D]">
        {' '}
        <About />
        <StarWrapper>
          <Timeline />
        </StarWrapper>
        <Accordionx />
        <ContactUs />
        <Container />
        <div className="mx-auto max-w-xl space-y-4 pt-24 text-neutral-300"></div>
      </div>
    </div>
  )
}
