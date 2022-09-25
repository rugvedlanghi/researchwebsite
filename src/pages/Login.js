import React from 'react'

const  Login=() =>{
  return (
    
       <div className="container bg-dark">
        <div className="row">
          <div className="col-md-3">
          </div>
          <div className="col-md-6 main ">
            <form action="/sign_up" method="POST">
              <h2>Login </h2>
              <input type="text" className="box text-black" id="name" name="name" placeholder="Username" required />
              {/* <br>
                    <input type="text" class="box" id="email" name="email" placeholder="Email" required />
                     <br> */}
              {/* <input type="text" class="box" id="phno" name="phno" placeholder="Mobile" required /> */}
              <br /> 
              <input type="password" className="box text-black" id="password" name="password" placeholder="Password" required />
              <br />
              <input type="submit" defaultValue="Submit" id="submit" />
            </form>
          </div>
          <div className="col-md-3">
          </div>
        </div>
      </div>
    
  )
}

export default Login;
