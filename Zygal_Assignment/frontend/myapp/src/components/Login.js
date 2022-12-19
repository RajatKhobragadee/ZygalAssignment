import axios from 'axios'
import React, { useState } from 'react'
const Login =()=>{
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()



  const submitHandler = async () => {
   
    if (!email || !password) {
      alert("Please fill the form")
    }

    // console.log(email, password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/login",
        { email, password },
        config
      );


      alert("Login Succesfully")
      localStorage.setItem("userInfo", JSON.stringify(data));
   
      // history.push("/message");
    } catch (error) {
     // alert("error")
     
    }
  };


return (

  <>
  <label>Email</label>
<input id="email"></input>
<label>Password</label>
<input id="password"></input>
<br></br>
<button onClick={submitHandler}>Click me</button>

  </>
)



}
export default Login