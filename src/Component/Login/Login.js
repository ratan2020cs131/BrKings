import React, { useEffect, useState } from 'react'
import Logo from '../../Images/BrownieKing.png';
import Cookie from '../../Images/brauni-ai (1) 1.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import "./Login.css";

const Login = () => {

  const [close,setclose] = useState(false);
  const navigation = useNavigate();

  return (
    <>
      <div className='flex justify-center main'>
        <div className="flex flex-col justify-center  flex-wrap bgimage">
          <button>
            <CancelIcon className='closeBtn' />
          </button>
          <div className="logo">
            <img
              className="mx-auto h-25 w-auto"
              src={Logo}
              alt="Brownie King"
            />
            <h2 className='brownie text-center text-rose-550 '>Brownie King</h2>
            </div>
            <h2 className="text-center text-2xl font-bold leading-10  text-grey-950">
              Sign in to your account
            </h2>
          <div className='card mt-2 flex-row'>
            <div className="mt-10 sm:mx-auto  sm:max-w-sm  cred">
              <form className='loginForm'>
                <label for='email' className='loginInput'>
                  Email
                  <input type='email' placeholder='Email' id='email' name='email' />
                </label>
                <label for='password' className='loginInput'>
                  Password
                  <input type='password' placeholder='Password' id='password' name='password' />
                </label>
                <button id='submit' class=" mt-4 rounded-md bg-rose-950 max-w-xl w-24 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Login
                </button>

              </form>
              <p className="mt-8 text-center text-sm text-gray-900">
                Not a member?{' '}
                <Link>
                  {console.log("signup")}
                  <a className="font-semibold leading-6 text-rose-950 hover:text-amber-500">
                    Signup
                  </a>
                </Link>
              </p>
            </div>
            
            <div className='cookie hidden md:block'>
              <img
                src={Cookie}
                alt='Cookie'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login