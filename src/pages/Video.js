import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Description from '../component/description/Description'
import VideoPlayer from '../component/description/VideoPlayer'
import Error from '../component/error/Error'
import NoVideos from '../component/error/NoVideos'
import Loading from '../component/loading/Loading'
import RelatedVideoList from '../component/relatedVideo/RelatedVideoList'
import { fetchVideo } from '../features/video/videoSlice'

export default function Video() {
  const {video, isLoading, isError, error} = useSelector(state => state.video)

  const {link, title} = video || {}


  const dispatch = useDispatch();
  const {videoId} =useParams()

  // useEffect hooks 
  useEffect(() => {
    dispatch(fetchVideo(videoId))
  },[dispatch,videoId])

  // decide what to render 
  let content = null;
  if(isLoading) content = <Loading />
  if(!isLoading && isError) content = <Error error={error} />
  
  if(!isLoading && !isError && !video?.id) {
    content = <NoVideos />
  }
  if(!isLoading && !isError && video?.id) {
    content = ( <div className="grid grid-cols-3 gap-2 lg:gap-8">
    <div className="col-span-full w-full space-y-8 lg:col-span-2">
        <VideoPlayer link={link} title={title} />
        <Description video={video} />
        </div>
        <RelatedVideoList />


   
</div>)
  }

  

  


  return (
    <>

    <section className="pt-6 pb-20">
    <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
      {content}
       
    </div>
   </section>
 
   </>
  )
}
