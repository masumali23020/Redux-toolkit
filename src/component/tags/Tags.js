import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Tag from './Tag';

import { fetchTags } from '../../features/tags/tagsSlice';

export default function Tags() {
  const {isLoading, isError, tags} = useSelector(state => state.tags)
  const dispatch = useDispatch();

  let content;

  if(!isLoading && !isError && tags.length > 0)  {
    content = tags.map(tag =>    <Tag key={tag.id} tag={tag} />)

  }
  

  useEffect(() => {
    dispatch(fetchTags())
  },[dispatch])
  return (
    <div>
          <section>
            <div
                className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto"
            >
               {content}
               
            </div>
        </section>
    </div>
  )
}
