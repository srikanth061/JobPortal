
import { useState } from "react"
import JobCard from "react-tinder-card"
import {Link} from 'react-router-dom'
import './card.css';


//importing data form json file

import Data from './companies.json'

// function applied(elem){
//     console.log(elem.value)
// }
// function rejected(elem){
//     console.log(elem.name.value)
// }
function JobCards(){
    const [apply , setapply]=useState('')
const applied = async (elem,name,job,experience,location)=>{
    try{
        const response=await fetch("http://localhost:5000/job",{
            method: 'POST', 
                mode: 'cors', 
                cache: 'no-cache', 
                credentials: 'same-origin', 
                headers: {
                'Content-Type': 'application/json',
                },
                redirect: 'follow', 
                referrerPolicy: 'no-referrer', 
                body: JSON.stringify({
                    name:name,
                    job:job,
                    experience:experience,
                    location:location,
                    
                    
                }) 
              
        });
        const data = await response.json
        
        setapply(data)
    }catch(e){
        console.log(e)
    }
}
    const onSwipe= (directin,name,job,experience,location) => {
        console.log('You swiped: ' + directin)
        if(directin==='right'){
            applied(directin,name,job,experience,location)
            console.log('applied')
            console.log(name,job,experience,location)
            
        }else{
            console.log('rejected')
        }
      }
      
    return(
        <div className="container1">
        <div>
        <h1 className="header">Latest Jobs For You</h1>
        </div>
        
        <div className="card_container">
{/* mapping items from json file */}
        {Data.map(person => (
            <JobCard onSwipe={(directin)=>onSwipe(directin,person.name,person.job,person.experirence,person.location)}  className="slide" preventSwipe={['up','down']}>
                <div className="card" key={person._id}>
                    <h3 name="name" value={person.name}>Company name : {person.name}</h3>
                    <h3 name="job">Role : {person.job}</h3>
                    <h3 name="experience">Experience required :{person.experirence}</h3>
                    <h3 name="location">Location : {person.location}</h3>
                </div>
            </JobCard>
        ))}
        
        </div>
        <div className="applied">
            <Link to="/applied"><button>Applied</button></Link>
        </div>
        
        </div>
        
    );
        }
export default JobCards