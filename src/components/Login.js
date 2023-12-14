import React, { useRef, useState } from 'react'
import Header from './Header'
import { CheckValidData } from "../utils/validate";

const Login = () => {

  const [issigninform,setisigninform] = useState(true);
  const [errormessage, seterrormessage] = useState(null)

  const email  = useRef(null);
  const password = useRef(null);

  const handlebtnClick = ()=>{
    // Validate the form data
    const message = CheckValidData(email.current.value, password.current.value);
    seterrormessage(message)

    // sign in / singup form
  }





const toggleSigninform = () =>{
  setisigninform(!issigninform);

}


  return (
    <div className="Login">
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="BackgroundImage"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute my-16 mx-auto right-0 left-0 p-8 bg-black bg-opacity-75 rounded-lg text-white"
      >
        <h1 className="font-bold text-3xl py-6">
          {issigninform ? "Sign In" : "Sign Up"}
        </h1>
        {!issigninform && (
          <input
            className="p-4 my-3 rounded-lg w-full bg-gray-500"
            type="text"
            placeholder="Full Name"
          />
        )}
        {!issigninform && (
          <input
            className="p-4 my-3 rounded-lg w-full bg-gray-500"
            type="text"
            placeholder="+91 8269938619"
          />
        )}
        <input
          ref={email}
          className="p-4 my-3 rounded-lg w-full bg-gray-500"
          type="text"
          placeholder="email"
        />
       
        <input
          ref={password}
          className="p-4 my-3 w-full rounded-lg bg-gray-500"
          type="password"
          placeholder="password"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errormessage}</p>
        <button
          type="submit"
          className="p-4 my-6 w-full rounded-lg bg-red-700"
          onClick={handlebtnClick}
        >
          {issigninform ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSigninform}>
          {issigninform
            ? "New to NetfliGPT? Sign up now"
            : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
}

export default Login;
