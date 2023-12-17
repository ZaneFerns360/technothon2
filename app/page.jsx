import Image from 'next/image'
import MultiLayerParallax from '@components/MultiLayerParallax'
import Video from '@components/Video'
import About from '@components/About'
export default function Home() {
  return (
    <div>
      <MultiLayerParallax />
      <div className="w-full bg-[#06141D]">
        {' '}
        <About />
        <div className="mx-auto max-w-xl space-y-4 pt-24 text-neutral-300"></div>
      </div>
      <Video />
    </div>
  )
}
