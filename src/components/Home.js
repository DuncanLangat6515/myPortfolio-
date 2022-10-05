import React from 'react'
import {user} from "./Data"

function Home(){
  return(
    <>
    <div className='homeparent'>
        <div>
            <img src={user.url} alt="ooops!"/>
       </div>
       <div>
        <h1>Hey I am <br></br> Duncan Langat  </h1>
        <p></p>
       </div>
    </div>
    
    

    </>
  )
}

export default Home 