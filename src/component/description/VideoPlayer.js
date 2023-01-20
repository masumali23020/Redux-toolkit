import React from 'react'

export default function VideoPlayer() {
  return (
    <iframe
                            width="100%"
                            class="aspect-video"
                            src="https://www.youtube-nocookie.com/embed/6O4s7v28nlw"
                            title="Some video title"
                            framebBorder=""
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
    
  )
}
