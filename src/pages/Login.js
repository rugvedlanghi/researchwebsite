import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'

const  Login=() =>{
  const navigate=useNavigate();
  const [user,setUser] = useState({
    name:"",password:""
  });
  let name,value,password;
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
  console.log("Invalid Registration");
 }
 else{
  window.alert("Registration Successfull");
  console.log("Successfull Registration");
  navigate('/');
 }
}


  return (
   
       <div className="container bg-dark">
        <div className="row">
          <div className="col-md-3">
          </div>
          <div className="col-md-6 main ">
            <form  method="POST">
              <h2>Login </h2>
              <input type="text" className="box text-black" id="name" name="name" 
              value={user.name}
              onChange={handleInputs}
              placeholder="Username" required />
              
              <br /> 
              <input type="password" className="box text-black" id="password" name="password"
              value={user.password}
              onChange={handleInputs}
               placeholder="Password" required />
              <br />
              <input type="submit" defaultValue="Submit" id="submit" onClick={PostData}/>
            </form>
          </div>
          <div className="col-md-3">
          </div>
        </div>
      </div>
    
  )
}

export default Login;
