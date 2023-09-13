import React, { useState } from 'react'
import Logo from '../../Images/BrownieKing.png';
import Cookie from '../../Images/brauni-ai (1) 1.png';
import { Link, useNavigate } from 'react-router-dom';
import { closeLog,signup } from '../../Redux/Slices/UserSlice';
import { useDispatch } from 'react-redux';
import CancelIcon from '@mui/icons-material/Cancel';
import "./Login.css";



const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '', password: ''
  })

  let name, value;
  const loginInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const logined = async (e) => {
    e.preventDefault();
    console.log("login");
    const { email, password } = user;

    const res = await fetch("/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    });
    const data = await res.json();

    if (res.status === 200) {
      window.alert(data.message);
      dispatch(closeLog());
      navigate("/");
    }
    else {
      if (res.status === 404) { navigate("/signup"); }
      window.alert(data.message);
      // console.log("Invalid Credentioals")
    }
  }

  return (
    <>
      <div className='flex justify-center main'>
        <div className="flex flex-col justify-center  flex-wrap bgimage">
          <button onClick={() => dispatch(closeLog()) }>
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
            <div className="mt-3 sm:mx-auto  sm:max-w-sm  cred">
              <form className='loginForm'>
                <label for='email' className='loginInput'>
                  Email
                  <input type='email' placeholder='Email' value={user.email} onChange={loginInputs} id='email' name='email' />
                </label>
                <label for='password' className='loginInput'>
                  Password
                  <input type='password' placeholder='Password' value={user.password} onChange={loginInputs} id='password' name='password' />
                </label>
                <button type='submit' id='submit'
                  onClick={logined}
                  class=" mt-4 rounded-md bg-rose-950 max-w-xl w-24 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Login
                </button>
                <a className='mt-4 text-center text-sm cursor-pointer text-gray-900' onClick={() => {
                  navigate('/forgotPass')
                  dispatch(closeLog());
                }}>Forgot Password?</a>
              </form>
              <p className="mt-8 text-center text-sm text-gray-900">
                Not a member?{' '}
                <Link onClick={() => {
                  dispatch(signup());
                  dispatch(closeLog());
                }}>
                  {/* {console.log("signup")} */}
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