import React, {  useState, useEffect } from "react";
import './style.scss'
import { signUpUserSuccess } from "../../Redux/User/user.action";
import { withRouter } from "react-router-dom";
import FormInput from "../forms/formInput/input";
import Button  from "../forms/Button";
import Password from "antd/lib/input/Password";
import { auth, handleUserProfile } from "../../firebase/firebase";
import AuthWrapper from "../AuthWrapper";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErr: user.userErr
});

function SignUp(props){
  const dispatch = useDispatch();
  const {currentUser, userErr} = useSelector(mapState)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);


  useEffect(()=>{
    if(currentUser){
         resetForm()
       
     props.history.push('/')
    }
  }, [currentUser])

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }

  }, [userErr]);

  const resetForm =() =>{
    setName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setErrors([])
  }

  const handleFormSubmit = async event =>{
    event.preventDefault()
    dispatch(signUpUserSuccess({
      name,
      email,
      password,
      confirmPassword
    }))

   

    // if(password !== confirmPassword){
    //   const err = ['password Don\'t match']
    //   setErrors(err)
    //   return
    // }

    // try{
    //  const {user} = await auth.createUserWithEmailAndPassword(email, password)
 
    //  await handleUserProfile(user, { name })
    //  resetForm()
    //  props.history.push('/')

    // }catch(err){

    // }



  }

    const AuthConfigWrapper = {
      headline: 'Register'
    }
    return(
      <AuthWrapper  {...AuthConfigWrapper}>
        <div className="formwrap">
           {errors.length > 0 && (
            <ul>
              {errors.map((err, index)=>{
                return (
                  <li key={index}>
                    {err}
 
                  </li>
                )
              })}
            </ul>

          )}


          

          </div>
          <form onSubmit={handleFormSubmit}>
            <FormInput
            type="text"
            name="displayName"
            value={name}
            placeholder="Full name"
            handleChange={e=>setName(e.target.value)}        
            />

            <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Enter your Email"
            handleChange={e=>setEmail(e.target.value)}        
            />
             <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Enter your Password"
            handleChange={e=>setPassword(e.target.value)}        
            />

            <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm your Password"
            handleChange={e=>setConfirmPassword(e.target.value)}        
            />
            <Button type="submit">
              Register
            </Button>

          

          </form>


      </AuthWrapper>
       
  
    )

}
export default withRouter(SignUp) 