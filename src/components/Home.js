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
        <h2>Junior Frontend Developer/ JavaScript Expert/ Content Creator </h2>
       </div>
    </div>
    
    

    </>
  )
}

export default Home 