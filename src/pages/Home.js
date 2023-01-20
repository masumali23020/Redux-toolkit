import React from 'react'
import Footer from '../component/footer/Footer'
import VideosGrid from '../component/grid/VideosGrid'
import NavBar from '../component/navbaer/NavBar'
import Tags from '../component/tags/Tags'
import Pagination from '../component/ui/Pagination'

export default function Home() {
  return (
    <>
    <NavBar />
    <Tags />
    <VideosGrid />
   
    <Pagination />
    <Footer />

    </>
  )
}
