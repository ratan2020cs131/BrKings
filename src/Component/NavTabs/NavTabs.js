import * as React from 'react';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom'
import './NavTabs.css';

const NavTabs = () => {

    return (
        <>
            <nav className="">
                <div className="navLink text-2xl">
                    {/* <div className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                    </div> */}

                    <div className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/brownies">Brownies</NavLink>
                    </div>

                    <div className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/yourOrder">Track Order</NavLink>
                    </div>

                    <div className="nav-item">
                        <NavLink className="nav-link" to="/getinTouch">Get in Touch</NavLink>
                    </div>

                    <div className="nav-item">
                        <NavLink className="nav-link" to="/contact">about Us</NavLink>
                    </div>

                    <Button variant="outlined" sx={{color: '#dd6800'}}  >
                        Login
                    </Button>

                </div>
            </nav>
        </>
    )
}

export default NavTabs