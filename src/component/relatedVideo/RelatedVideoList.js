import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRelatedVideos } from '../../features/relatedVideos/relatedVideosSlice'
import Error from '../error/Error'
import NoVideos from '../error/NoVideos'
import Loading from '../loading/Loading'
import ReletedVideo from './ReletedVideo'

function RelatedVideoList({curentVideoid, tags}) {

  const {isLoading, isError, error, relatedvideos} = useSelector(state => state.relatedVideos)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchRelatedVideos({tags, id: curentVideoid}))

  },[dispatch, tags, curentVideoid  ])

  // decide what to render 
  let content = null;
  if(isLoading) content = <Loading />
  if(!isLoading && isError) content = <Error error={error} />
  if(!isLoading && !isError && relatedvideos?.length === 0) {

    content = <NoVideos />
  }
  if(!isLoading && !isError && relatedvideos?.length > 0) {

    content = relatedvideos.map(video =>  <ReletedVideo key={video.id} video={video} /> )
  }


  return (
    <div
    className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
>
    
    {content}
</div>
  )
}

export default RelatedVideoList