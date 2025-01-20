import React, { useRef } from 'react'

const Video = () => {

    const videoRef = useRef(null)

    const handlePause = () => {
        videoRef.current.pause()
    }

    const handlePlay = () => {
        videoRef.current.play();
    }

    return (
        <div>
            <video controls ref={videoRef} height={300} width={300} src="https://videos.pexels.com/video-files/855289/855289-hd_1920_1080_25fps.mp4"></video>

            <button onClick={handlePause}>Pause</button>
            <button onClick={handlePlay}>Play</button>

        </div>
    )
}

export default Video