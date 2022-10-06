import React from 'react'
import {user} from "./Data"
import { Link } from 'react-router-dom'


function Home(){
  return(
    <>
    <div className='homeparent'>
        <div>
            <img src={user.url} alt="ooops!"/>
       </div>
       <div className='intro'>
        <h3>Hey I am Duncan Langat  </h3>
        <p>Junior Frontend Developer/ JavaScript Expert/ Content Creator <br></br>   
        I will be glad to work with you 
        </p>
       </div>
</div>
    <Link to='/contact' className='button'>HIRE ME</Link>
    </>
  )
}

export default Home 




