import React, { useState } from 'react'
import Items from '../Component/Items'
import "../Pages/Users.css"
import Nav from '../Component/Nav/Nav';
import Color from '../Component/Color';


const Users = ()=>{
    // the first state imoirts the item array
const [data,setData]= useState(Items);
// this state is for the search input
const [searchInput,setSearchInput]=useState('');
const handleInput = (e)=>{
    const value = e.target.value;
    setSearchInput(value);
    if (value ===""){
        setData(Items)
    }else{
        const filteredData = Items.filter((data)=>data.country.toLowerCase().includes(value.toLowerCase()));
        setData(filteredData)
    }
    console.log (value)
}



// const [filter,setFilter] = useState("All countries")

const handleCountries = (Countries) =>{
    if(Countries === "All countries"){
        setData(Items)
    }else{
         const search = Items.filter((data)=>data.continent===Countries)
         setData(search)
          }
}

    return (
       <div>
    <Nav onclick={handleCountries}/>

    <div className='main_body'>
        
        <button onClick={()=>handleCountries("All countries")} className='btn'>All Show Players</button>
        
        <input type="text" placeholder='Enter Countries' value={searchInput} onChange={(handleInput)} className='input'/>
        <button className='toggle'></button>
        
        <div className='items_container'>
        {data.map((val,key)=>{
            return(
                <div key={key} className="card">
                    <h2>Name: {val.name}</h2>
                    <h2>Age: {val.AGE}</h2>
                    <h2>Team: {val.team}</h2>
                    <h2>Country: {val.country}</h2>
                    <h2>Continent: {val.continent}</h2>
                </div>
            );
        })}
        </div>
       
        <div>
        <button className="btn" onClick={()=>setData([])}>Clear Field </button>
        </div>
     
    </div>
   
    </div>
  )
}

export default Users