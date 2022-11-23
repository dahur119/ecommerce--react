import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {useSelector}  from 'react-redux'
import { Link } from "react-router-dom";
import './style.scss'
import { auth } from "./../../firebase/firebase";
import { signOutUserStart } from "../../Redux/User/user.action";
const mapState = ({ user }) => ({
    
    currentUser: user.currentUser
})

const Header = props =>{
    const dispatch = useDispatch()
    const {currentUser} = useSelector(mapState)
    console.log(currentUser)

    const signOut =() =>{
        dispatch(signOutUserStart())
    }
   

    return (
        <header className="header">
            <div className="wrap">
               <div className="name">
                <span>Na buy</span>
               </div>
               <div className="callToActions">

                {currentUser && (
                    <ul>
                         <li>
                         <Link to="/dashboard">
                             MyAccount
                         </Link>
                     </li>
                        <li>
                            <span onClick={()=>signOut()}>
                                Logout
                            </span>
                        </li>
                    </ul>
                )}

                {!currentUser && (
                     <ul>
                       
                     <li>
                         <Link to="/">
                             Home
                         </Link>
                     </li>
                     <li>
                         <Link to="/men">
                             Men
                         </Link>
                     </li>
                     <li>
                         <Link to="/women">
                             Women
                         </Link>
                     </li>
                     <li>
                         <Link to="/register">
                             Register
                         </Link>
                     </li>
                     <li>
                         <Link to="/login">
                             Login
                         </Link>
                     </li>
                 </ul>

                ) }
               
                     
      
                     


               </div>

            </div>

        </header>

    )
}

Header.defaultProps = {
    currentUser: null
};


export default Header