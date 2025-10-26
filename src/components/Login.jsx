import React from 'react'
function Login()


{
    const  dis=()=>{
     var name= document.getElementById("t1").value;
     alert("your name :"+name)
    }
    return(
<>
<h1>hello</h1>
<input type='text' id='t1'></input>
<button  onClick={dis}>click me</button>

</>
    )
}
export default Login