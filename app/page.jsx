import Image from 'next/image'
import MultiLayerParallax from '@components/MultiLayerParallax'
import Video from '@components/Video'
export default function Home() {
  return (
    <div>
      <MultiLayerParallax />
      <div className="w-full bg-[#06141D]">
        <div className="mx-auto max-w-lg space-y-4 pt-24 text-neutral-300">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
            earum nobis quasi repellat. Amet facere nulla dolorum accusantium
            sit dolores odio excepturi facilis laboriosam officiis dolorem,
            nobis reprehenderit molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
            earum nobis quasi repellat. Amet facere nulla dolorum accusantium
            sit dolores odio excepturi facilis laboriosam officiis dolorem,
            nobis reprehenderit molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
            earum nobis quasi repellat. Amet facere nulla dolorum accusantium
            sit dolores odio excepturi facilis laboriosam officiis dolorem,
            nobis reprehenderit molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
            earum nobis quasi repellat. Amet facere nulla dolorum accusantium
            sit dolores odio excepturi facilis laboriosam officiis dolorem,
            nobis reprehenderit molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
            earum nobis quasi repellat. Amet facere nulla dolorum accusantium
            sit dolores odio excepturi facilis laboriosam officiis dolorem,
            nobis reprehenderit molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
            earum nobis quasi repellat. Amet facere nulla dolorum accusantium
            sit dolores odio excepturi facilis laboriosam officiis dolorem,
            nobis reprehenderit molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
            earum nobis quasi repellat. Amet facere nulla dolorum accusantium
            sit dolores odio excepturi facilis laboriosam officiis dolorem,
            nobis reprehenderit molestiae.
          </p>
        </div>
      </div>
      <Video />
    </div>
    // <div className="relative min-h-screen bg-[#81D0D4]">
    //   <div className="absolute inset-0 bg-[#81D0D4]">
    //     <Image
    //       alt="main-img"
    //       width={1920}
    //       height={1080}
    //       src="/assets/pnggg.jpg"
    //       className="opacity-50"
    //     ></Image>
    //   </div>
    //   <div className="absolute inset-0 flex items-center justify-center">
    //     <Image alt="GG" width={500} height={500} src="/assets/GG.png"></Image>
    //   </div>
    //   <div className="absolute bottom-0 w-full">
    //     <Image
    //       alt="sea-link"
    //       width={1920}
    //       height={1080}
    //       src="/assets/sea-link.png"
    //       className=""
    //     ></Image>
    //   </div>
    // </div>
  )
}
