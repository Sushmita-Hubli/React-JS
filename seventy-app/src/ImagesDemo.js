import React from 'react'
import topics from './images/topics.png'

const ImagesDemo = () => {
  return (
    <div>
    <h2>Way 1</h2>
      <img src={topics}></img>
      <br></br>
      <h2>Way 2</h2>
      <img src={require('./images/router.png')}></img>
      <br></br>
      <h2>Way 3: In this method we will copy paste our images in public folder so we need not have to import an image to use it </h2>
      <img src='images/image2.png'></img>

    </div>
  )
}

export default ImagesDemo
