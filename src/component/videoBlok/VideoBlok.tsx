import "./videoBlok.scss"

export const VideoBlok = () => {
  return (
    <section className="video-blok-container">
      <iframe className="elementor-video-iframe" allowFullScreen allow="autoplay" title="vimeo Video Player" src="https://player.vimeo.com/video/911408281?autoplay=1&amp;playsinline=1&amp;color&amp;autopause=0&amp;loop=1&amp;muted=0&amp;title=0&amp;portrait=0&amp;byline=0&amp;h=98b4bae6b5#t="></iframe>
      <div className="video-blok-anumation-content">
          {/* <h1 className="video-blok-anumation-content-1">Join the movement  </h1> */}
        {/* <h1 className="video-blok-anumation-content-2"> that empowers diverse voices</h1>
        <h1 className="video-blok-anumation-content-3">to inspire meaningful changes in others</h1> */}

      </div>
    </section>
  )
}