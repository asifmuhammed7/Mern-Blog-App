import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useSignup = () => {
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate()
  const signup = async ({ username,email,password})=>{
    const success = handleInputErrors({username,email,password});
    if(!success) return;
    setLoading(true)
    try {
        console.log("gettng")
        const res = await fetch("/api/auth/signup",{
            method: "POST",
            headers: {"Content-type": "application/json" },
            body: JSON.stringify({ username,email,password })
        })

        const data = await res.json();
        if(data.error){
            throw new Error(data.error)
        }
        toast.success("signup sucessfully")
        console.log("signup sucessfully");
        navigate('/')
    } catch (error) {
        toast.error(error.message)
    }finally{
        setLoading(false) 
    }
  }
  return{loading,signup}
}

export default useSignup

function handleInputErrors ({username,email,password}){
    if(!username||!email||!password){
        toast.error('Please fill all fields')
        return false;       
    }
    if(password.length< 6){
        toast.error('Password must be at least 6 characters')
        return false;
    }

    return true
}