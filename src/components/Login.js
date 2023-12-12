import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div className="Login" >
      <Header />

      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="BackgroundImage"
        />
      </div>
      <form className=''>
        <input className='p-2 m-2' type='text' placeholder='email' />   <input className='p-2 m-2' type='password' placeholder='password' />
        <button type='submit'  className='p-4 m-4'>Sign in</button> 
      </form>
    </div>
  );
}

export default Login
