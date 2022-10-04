import React from 'react'
import {user} from "./Data"

function Home(){
  return(
    <div className='homeparent'>
        <div>
            <img src={user.url} alt="ooops!"/>
       </div>
       <div>
        <h1>I am Web Developer</h1>
       </div>

    </div>
  )
}

export default Home 