import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
const {user,logout} = useAuth()
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <HashLink  className="nav-link  text-white"  aria-current="page" to="/home#home">Home</HashLink>
                    </li>
                    <li className="nav-item">
                    <HashLink className="nav-link text-white"  to="/home#services">Services</HashLink>
                    </li>
                    <li className="nav-item">
                    <HashLink className="nav-link  text-white"   to="/home#exparts" >expart</HashLink>
                    </li>
                    {
                        user.email?
                        <div  className = "nav-item" >
                             <li>
                            <button className = "btn btn-dark" onClick = {logout}>LogOut</button>
                        </li>
                        </div>
                        :
                        <li className="nav-item">
                        <HashLink className="nav-link text-white "   to="/login" >Login</HashLink>
                        </li>
                    }
                    <li className="nav-item">
                        <img src={user?.photoURL} alt=""width="40px" style={{borderRadius:"50%"}}  />
                    </li>
                   

                </ul>
               
                </div>
            </div>
            </nav>
                        
        </div>
    );
};

export default Header;