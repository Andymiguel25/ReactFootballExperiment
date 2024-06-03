import React from 'react'
import "../Nav/Nav.css"


const Nav = ({onclick}) => {

  return (
    <div>
      <nav className='nav'>
       
       <div> 
        <h1 onClick={()=>onclick("All countries")} className='home'>Home</h1>
    
        </div>
       
        <div>
          <ul>
            <li onClick={()=>onclick("Africa")}>Africans</li>
            <li onClick={()=>onclick("Europe")} >Europeans</li>
            <li onClick={()=>onclick("South America")}>South Americans</li>

          </ul>
          
          </div>
      </nav>
  
    </div>
    
  )
}

export default Nav