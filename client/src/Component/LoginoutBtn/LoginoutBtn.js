import React from "react";
import { selectUser, login, logout } from "../../Redux/Slices/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const logoutHandler = () => {
    fetch("/api/v1/auth/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        dispatch(logout());
        navigate("/", { replace: true }); //second parameter crealed the navigation history stack
        if (res.status !== 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


    return (
        <>
            {user ?
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

export default LoginoutBtn;
