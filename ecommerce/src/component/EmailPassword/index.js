import React, { useEffect, useState } from "react";

import { withRouter } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import AuthWrapper from "../AuthWrapper";
import Button from "../forms/Button";
import FormInput from "../forms/formInput/input";
import { useDispatch } from "react-redux";
import { resetPasswordStart} from "../../Redux/User/user.action";
import { useSelector } from "react-redux";
import { resetUserState } from "../../Redux/User/user.action";

import './style.scss'


const mapState = ({ user}) =>({
    resetPasswordSuccess: user.resetPasswordSuccess,
    userErr: user.userErr
})


function  EmailPassword(props){
    const dispatch = useDispatch()
    const {resetPasswordSuccess,userErr } = useSelector(mapState)
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])

    useEffect(()=>{
        if(resetPasswordSuccess){
            dispatch(resetUserState())
            props.history.push('/login')
        }

    }, [resetPasswordSuccess])

    useEffect(()=>{
        if(userErr){
            if(Array.isArray(userErr) && userErr.length >0){
                setErrors(userErr)
            }
        }

    }, [userErr])

     

  
  

   

    const handleSubmitHandler =  (e) =>{
        e.preventDefault()
        dispatch(resetPasswordStart({ email }));

        // try{
           
        //     const config = {
        //         url: 'http://localhost:3000/login'

        //     }

        //     await auth.sendPasswordResetEmail(email,config)
        //         .then(()=>{
        //             props.history.push('/login')
        //         })
        //         .catch(()=>{
        //            const err =['Email not Found Please Try Again']
        //             setErrors(err)
        //         })

        // }catch(err){

        // }
    }
     

        const AuthConfigWrapper ={
            headline:'Email Reset'
        }
        return(
            <AuthWrapper {...AuthConfigWrapper}>
                <div className="formwrap">
                    {errors.length > 0 && (
                        <ul>
                           {errors.map((e, index)=>{
                            return (
                                <li key={index}>
                                    {e}

                                </li>
                            )
                           })} 
                        </ul>
                    )}
                    <form onSubmit={handleSubmitHandler}>
                        <FormInput
                            type='email'
                            name="email"
                            placeholder="email"
                            value={email}
                            handleChange={e=>setEmail(e.target.value)}
                        />

                        <Button type="submit">
                            Email Password
                        </Button>

                    </form>

                </div>

            </AuthWrapper>
        )
}
export default withRouter(EmailPassword)