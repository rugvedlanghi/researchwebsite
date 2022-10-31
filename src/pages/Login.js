import React,{useState} from 'react';
import "../css/login.css";
import {useNavigate} from 'react-router-dom'

const  Login=() =>{
  const navigate=useNavigate();
  const [user,setUser] = useState({
    name:"",password:""
  });
  let name,value;
  const handleInputs=(e)=>{
    console.log(e)
    name=e.target.name;
    value= e.target.value;
    setUser({...user,[name]:value});
  }
const PostData =async(e)=>{
  e.preventDefault();
  const {name,password}= user;
  const res= await fetch("/Login",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name,password
    })
  });
 const data = await res.json();
 if(data.status === 422 || !data){
  window.alert("Invalid Registration");
  // navigate('/Login');
  // console.log("Invalid Registration");
 }
 else{
  
  window.alert("Registration Successfull");
  console.log("Successfull Registration");
 navigate('/');
 }
}


  return (
   
       <div className="container loginbody pt-5">
        <div className="row">
          <div className="col-md-3 ">
          </div>
          <div className="col-md-6 loginmain ">
            <form  method="POST">
              <h2 className="text-colour-primary pt-3 mb-3">Login </h2>
              <input  type="text" className=" ibutton box text-black" id="name" name="name" 
              value={user.name}
              onChange={handleInputs}
              placeholder="Username" required />
              
              <br /> 
              <input  type="password" className="ibutton box text-black" id="password" name="password"
              value={user.password}
              onChange={handleInputs}
               placeholder="Password" required />
              <br />
              <br />
              <br />
              
              <input className='isubmit' type="submit" defaultValue="Submit" id="submit" onClick={PostData}/>
              </form>
          </div>
          <div className="col-md-3">
          </div>
        </div>
      </div>
    
  )
}

export default Login;
