import { useState } from "react";
import {Link} from "react-router-dom";
import './homepage.css'
function Signup(){
    const[loginmsg,setmsg]=useState('');
    const register= async elem=>{
        try{
            elem.preventDefault();
            const response = await fetch("http://localhost:5000/sign_up", {
                method: 'POST', 
                mode: 'cors', 
                cache: 'no-cache', 
                credentials: 'same-origin', 
                headers: {
                'Content-Type': 'application/json'
                
                },
                redirect: 'follow', 
                referrerPolicy: 'no-referrer', 
                body: JSON.stringify({
                    name:elem.target.name.value,
                    email:elem.target.email.value,
                    password:elem.target.password.value
                    
                }) 
            });
            const data=await response.json();
            setmsg(data.message)
            
            }
        catch(e){
            console.log(e)
        }
        

    }

return <div className="container">
            <div className='parent1'>
                    <h2 className='text1'>Job Portal App</h2>
                    <form onSubmit={elem=>register(elem)}>
                        <label>name:</label><br/>
                        <input name="name" type="text"/><br/>
                        <label>email:</label><br/>
                        <input name="email" type="email"/><br/>
                        <label>password:</label><br/>
                        <input name="password" type="password"/><br/><br/>
                        <button className="btn">enter</button>&nbsp;&nbsp;
                        <Link to = "/"><button className="btn">home</button></Link>
                        <p>{loginmsg}</p>
                    </form>
                 </div>
       
            </div>
    
}
export default Signup; 