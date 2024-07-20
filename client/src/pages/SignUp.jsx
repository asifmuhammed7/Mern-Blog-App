import { Button, Label, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useSignup from '../hooks/useSignup'

export default function SignUp() {

  const  [formData, setFormData] = useState({
    username:"",
    email:"",
    password:""
  })
  const { loading, signup } = useSignup()
  const handleSubmit = async (e)=>{
    e.preventDefault()
    await signup(formData)
  }
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
        <Link to="/" className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
            via-purple-500 to-pink-500 rounded-lg text-white'>Dev's</span>
            Blog
        </Link>
        <p className='text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className='flex-1'>
          <form className= 'flex flex-col gap-4' onSubmit={handleSubmit} >
            <div>
              <Label value='Your username'/>
              <TextInput
              type='text'
              placeholder='username'
              id='username'
              onChange={(e)=>setFormData({...formData,username:e.target.value})}
              />
            </div>
            <div>
              <Label value='Your email'/>
              <TextInput
              type='email'
              placeholder='example@gmail.com'
              id='email'
              onChange={(e)=>setFormData({...formData,email:e.target.value})}
              />
            </div>
            <div>
              <Label value='Your password'/>
              <TextInput
              type='password'
              placeholder='password'
              id='password'
              onChange={(e)=>setFormData({...formData,password:e.target.value})}
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type = 'submit' >Signup</Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account ?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
