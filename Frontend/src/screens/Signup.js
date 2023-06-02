import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
function Signup() {
  return (
    <Fragment>
        <section className="bg-black flex flex-col  items-center  h-screen ">
            <h1 className='text-white text-3xl mt-[80px]'>Sign Up</h1>
            <p className="text-white text-xl mt-8 ">
          <i className="fas fa-user "></i> Register Your Account
            </p>
            <form className='flex flex-col gap-6 mt-5 '>
            <input type="text" placeholder='First Name' className='pr-28 pl-5 py-2 rounded-2xl'></input>
            <input type="text" placeholder='Last Name'  className='pr-28 pl-5 py-2 rounded-2xl'></input>
            <input type="email" placeholder='Email' className='pr-28 pl-5 py-2 rounded-2xl'></input>
            <input type="password" placeholder='Password' className='pr-28 pl-5 py-2 rounded-2xl'></input>
            <p className='text-white'>Already a member?<span><Link to="/sign-in">Login</Link></span></p>
            <input type='submit' className='btn btn-primary'></input>
            </form>
        </section>
    </Fragment>
  )
}

export default Signup