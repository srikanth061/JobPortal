import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';


function Applied_jobs(){
    const[applied, setapplied]=useState([]);
    async function getData(){
        try{
            const data =await fetch("http://localhost:5000/job",{
                method: 'GET', 
                mode: 'cors', 
                cache: 'no-cache', 
                credentials: 'same-origin', 
                headers: {
                'Content-Type': 'application/json',
               
                },
                redirect: 'follow', 
                referrerPolicy: 'no-referrer', 
                
            
            });
            const res = await data.json()
            console.log(res)
            setapplied(await res.job);
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getData();
    },[]);
    
        return (

            <div className="applied_jobs">
                {applied.map(application =>
                <div className="applied_job_details" key={application._id}>
                    <h3>{application.name}</h3>
                    <h3>{application.job}</h3>
                    <h3>{application.experience}</h3>
                    <h3>{application.location}</h3>
                </div>
                    )}
                    <Link to='/'>Home</Link>
                   
            </div>
           
    )
}
export  default Applied_jobs