import React, { useEffect } from "react";
import './style.scss'
import Button from "../forms/Button";
import { useDispatch, useSelector } from "react-redux";
import { emailSignInStart } from "../../Redux/User/user.action";
import { googleSignStart } from "../../Redux/User/user.action";


import FormInput from "../forms/formInput/input";
// import Button from "../forms/Button";
import AuthWrapper from "../AuthWrapper";
import { Link, withRouter } from "react-router-dom";
import { useState } from "react";
import userTypes from "../../Redux/User/user.types";


const mapState = ({ user}) => ({
  currentUser: user.currentUser
})


function SignIn (props){
  const {currentUser} =useSelector(mapState)
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ error, setError] = useState([])

  useEffect(()=>{
    if(currentUser){
      resetForm(); 
    
    props.history.push('/')    


    }

  },[currentUser])

  const resetForm = () =>{
    setEmail('')
    setPassword('')
  };

 



  const handleSubmit = async e =>{
    e.preventDefault()
    dispatch(emailSignInStart({email, password}))
   
  }

  const handleGoogleSignIn =() =>{
    dispatch(googleSignStart())

  }
  const AuthConfigWrapper ={
    headline: 'Login'
  }


    return (

      <AuthWrapper  {...AuthConfigWrapper}>
          <div className="formwrap">
          <form onSubmit={handleSubmit}>

            <FormInput
            type='email'
            name="email"
            value={email}
            placeholder="Enter Your Email"
            handleChange={e=>setEmail(e.target.value)}    
            />

          <FormInput
            type='password'
            name="password"
            value={password}
            placeholder="password"
            handleChange={e=>setPassword(e.target.value)}    
            />

            <Button   type="submit">Login </Button >

          
            <div className="socialSign">
              <div className="row">
                <Button  onClick={handleGoogleSignIn}>Google signin</Button>
  
              </div>
  
            </div>

            <div className="links">
              <Link to="/recovery">
                Reset password
              </Link>

            </div>
          </form>
  
         </div>

      </AuthWrapper>

    )
}
export default withRouter(SignIn) 