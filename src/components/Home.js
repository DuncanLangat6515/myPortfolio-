import React from 'react'

function Home({images}) {
    console.log(images)
    const imageCard=images.map(individualImage=>(
        <div>
            <img src={individualImage.image} alt="dan" />
            <h3>{individualImage.name}</h3>
        </div>
    ))

  return (
    <div className='home'>
        {imageCard}
        <h1>I am Web Developer</h1>
        <button className=''>Hire me</button>
    </div>
  )
}

export default Home