import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchViedod } from "../../features/videos/videosSlice.js";
import Error from '../error/Error.js';
import NoVideos from '../error/NoVideos.js';
import Loading from '../loading/Loading.js';
import VideoGridItem from './VideoGridItem';

export default function VideosGrid() {

  const {isLoading, isError, error, videos } = useSelector(state => state.videos);
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchViedod())
  }, [dispatch])


  // decide what to render 
  let content;
  if(isLoading) content = <Loading />;
  if(!isLoading && isError ) content = <Error error={error} />
  if(!isLoading && !isError && videos?.length === 0 ){
    content =    <NoVideos />
  }
  if(!isLoading && !isError && videos?.length > 0 ){
    content =   videos.map(video =>  <VideoGridItem key={video.id} video={video} />)
  }

  return (
    <>
     <section className="pt-12">
            <section className="pt-12">
                <div
                    className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
                >
                   {content}
                  
                    
                    

                   
                   {/* <Error /> */}
                </div>
            </section>
        </section>

    </>
  )
}
