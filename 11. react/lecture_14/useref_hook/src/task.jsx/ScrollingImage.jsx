import React, { useRef } from 'react'

const ScrollingImage = () => {

   const image = useRef(null);

   const handleScroll = () => {
      image.current.scrollIntoView({behavior : "smooth"});
   }

  return (
    <div>
      <button onClick={handleScroll}>Scroll</button>
      <div className="scroll_container">
        <img ref={image} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg" alt="Cinque Terre" width="600" height="400" />
        <img ref={image} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg" alt="Forest" width="600" height="400" />
        <img ref={image} src="https://thumbs.dreamstime.com/b/sun-going-down-behind-bare-leafless-tree-tree-silhouetted-sunset-215241866.jpg" alt="Northern Lights" width="600" height="400" />
        <img ref={image} src="https://thumbs.dreamstime.com/b/beautiful-autumn-sun-rising-behind-oak-trees-distance-beautiful-autumn-sun-rising-behind-oak-trees-238048056.jpg" alt="Mountains" width="600" height="400" />
      </div>
    </div>
  )
}

export default ScrollingImage