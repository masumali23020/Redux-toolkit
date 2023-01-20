import React from 'react'
import VideosGrid from '../component/grid/VideosGrid'
import Tags from '../component/tags/Tags'
import Pagination from '../component/ui/Pagination'

export default function Home() {
  return (
    <>
   
    <Tags />
    <VideosGrid />
   
    <Pagination />


    </>
  )
}
