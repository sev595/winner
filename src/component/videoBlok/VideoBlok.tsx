import "./videoBlok.scss"


export const VideoBlok = () => {
  return (
    <section className="video-blok-container">
      <div className="video-blok-iframe-content" >
        <iframe className="elementor-video-iframe" title="vimeo Video Player"
          src="https://player.vimeo.com/video/911408281?autoplay=1&amp;playsinline=1&amp;color&amp;autopause=0&amp;loop=1&amp;muted=0&amp;title=0&amp;frameborder=0&amp;byline=0&amp;h=98b4bae6b5#t=" 
          // src= 'https://www.youtube.com/embed/rLVEcuwRAms?si=P1B8JtqoIFXVqO_D'
          />
      </div>
      {/* <div className="video-blok-anumation-content">
        <h2 className="video-blok-anumation-content-text video-blok-anumation-content-1">Join <br />the movement  </h2>
        <h2 className="video-blok-anumation-content-text video-blok-anumation-content-2"> that <br/> empowers <br /> diverse voices</h2>
        <h2 className="video-blok-anumation-content-text video-blok-anumation-content-3">to inspire <br/> meaningful <br /> changes in others</h2>
        <button className="video-blok-anumation-content-button">Join us</button>
      </div> */}
    </section>
  )
}