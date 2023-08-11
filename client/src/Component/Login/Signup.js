import React from 'react'
import Logo from '../../Images/BrownieKing.png';
import Cookie from '../../Images/brauni-ai (1) 1.png';
import { Link } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import "./Login.css";

const Signup = () => {
    return (
        <>
            <div className='flex min-h-full justify-center my-7 h-screen main'>
                <div className="flex flex-col justify-center  bgimage">
                    <CancelIcon className='closeBtn' />
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm logo">
                        <img
                            className="mx-auto h-25 w-auto"
                            src={Logo}
                            alt="Brownie King"
                        />
                        <h2 className='brownie text-center text-rose-550 '>Brownie King</h2>
                    </div>
                    <h2 className="mt-3 text-center text-2xl font-bold leading-9  text-gey-950">
                        Create New account
                    </h2>
                    <div className='card flex-row'>
                        <div className="mt-7 sm:mx-auto  sm:max-w-sm cred">
                            <form className='loginForm'>
                                <label for='name' className='loginInput'>
                                    Name
                                    <input type='text' id='name' name='name' />
                                </label>
                                <label for='email' className='loginInput'>
                                    Email
                                    <input type='email' id='email' name='email' />
                                </label>
                                <label for='password' className='loginInput'>
                                    Password
                                    <input type='password' id='password' name='password' />
                                </label>
                                <label for='confirm_password' className='loginInput'>
                                    Confirm Password
                                    <input type='password' id='confirm_password' name='confirm_password' />
                                </label>
                                <button id='submit' class=" mt-4 rounded-md bg-rose-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Register
                                </button>

                            </form>

                            <p className="mt-5 text-center text-sm text-gray-900">
                                Already a member?{' '}
                                <Link to='/Login'>
                                    <a className="font-semibold leading-6 text-rose-950 hover:text-amber-500">
                                        Signin
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

export default Signup;