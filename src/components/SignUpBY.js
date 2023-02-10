import React from 'react'
import { useState } from "react"

export const SignUpBY = () => {
    let [name,setName]=useState("")
    let [email,setEmail]=useState("")
    let [password,setPass]=useState("")
    let [image,setImage]=useState("")

   let handleSubmit=async (e)=>{
         e.preventDefault()
        console.log({name,email,password,image});



       let result= await fetch('http://localhost:8000/signup',{
         
        });

        // .then((res)=>{
        //     res.json()}).then((response)=>{
        //             console.log(response);
        //     });
        

        if(await result.json()){
            window.alert("Your account has been created successfully, navigate to LOGIN page to login")
        }
        else{
            window.alert("Oops...SignUP failed")
        }


    }
  return (
    <div>
    <div><h1>Please Enter your details to SIGNUP as a buyer</h1></div>

    <form  encType="multipart/form-data">
    <div>
        <label for="name">Name</label>
        <input type="text" id="name" value={name} onChange={e=>{setName(e.target.value)}} />
    </div>

    <div>
        <label for="email">Email</label>
        <input type="email" id="email" value={email} onChange={e=>{setEmail(e.target.value)}} />
    </div>

    <div>
        <label for="password">Password</label>
        <input type="password" id="password" value={password} onChange={e=>{setPass(e.target.value)}} />
    </div>

    <div>
        <label for="image">Image</label>
        <input type="file" id="image" value={image} onChange={e=>{setImage(e.target.value)}} />
    </div>

    <div>
    <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
    </form>
    </div>
  )
}
