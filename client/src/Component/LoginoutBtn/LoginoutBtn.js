import React, { useEffect } from 'react'
import { selectUser, login, logout, loggedin } from '../../Redux/Slices/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginoutBtn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(selectUser);

    const logoutHandler = () => {
        fetch('/api/v1/auth/logout', {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then(res => {
            dispatch(logout());
            navigate("/", { replace: true });//second parameter crealed the navigation history stack
            if (res.status !== 200) {
                // console.log(res.message); 
                const error = new Error(res.message);
                throw error;
            } else { console.log("lgout") }
        }).catch(err => {
            console.log(err);
        });
    }

    const token = window.localStorage.getItem("token");
    // console.log("hello")
    useEffect(() => {
        if (!token) {
            dispatch(login());
        }
    }, [])

    return (
        <>
            {token ?
                (<div className='btn text-black font-semibold bg-orange-600 lg:mx-4 transform transition duration-300 hover:scale-110'>
                    <button onClick={logoutHandler} >
                        Logout
                    </button>
                </div>)
                :
                (<div className='btn text-orange-600 lg:mr-4 transform transition duration-300 hover:scale-110'>
                    <button onClick={() => dispatch(login())} >
                        Login
                    </button>
                </div>)
            }
        </>
    )
}

export default LoginoutBtn