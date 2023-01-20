import React from 'react'
import Description from '../component/description/Description'
import VideoPlayer from '../component/description/VideoPlayer'
import Footer from '../component/footer/Footer'
import NavBar from '../component/navbaer/NavBar'
import RelatedVideoList from '../component/relatedVideo/RelatedVideoList'

export default function Video() {
  return (
    <>
    <NavBar />
    <section class="pt-6 pb-20">
    <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div class="grid grid-cols-3 gap-2 lg:gap-8">
            <div class="col-span-full w-full space-y-8 lg:col-span-2">
                <VideoPlayer />
                <Description />
                </div>
                <RelatedVideoList />


           
        </div>
    </div>
   </section>
   <Footer />
   </>
  )
}
