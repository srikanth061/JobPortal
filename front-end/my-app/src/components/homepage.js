import { useState } from "react";
import { setToken } from "../utils/authoperations";
import "./homepage.css";
import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";

function Homepage(){
    const history=useHistory()
    const [loginstatus,setstatus]=useState(false)
    const [loginmsg,setmsg]=useState('')
    const login= async elem=>{
        try{
            elem.preventDefault();
            const response = await fetch("http://localhost:5000/login", {
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
                    email:elem.target.email.value,
                    password:elem.target.password.value
                }) 
            });
            const data=await response.json();
            if (data.data==='error'){
                setstatus(true)
                setmsg(data.message)
            }else{
                console.log("token",await data)
                setToken(data.data)
                history.push("./jobs")
            }
        }catch(e){
            console.log(e)
        }
        

    }
    return <div className="container">
            <div className='parent1'>
                    <h2 className='text1'>Job Portal App</h2>
                    <form onSubmit={elem=>login(elem)}>
            
                        <label>email:</label><br/>
                        <input name="email" type="email"/><br/>
                        <label>password:</label><br/>
                        <input name="password" type="password"/><br/><br/>
                        <button className="btn">enter</button>&nbsp;&nbsp;
                        <Link to = "/signup"><button class="btn">signup</button></Link>
                        <p>{loginmsg}</p>
                    </form>
                 </div>
       
            </div>
    
}
export default Homepage;