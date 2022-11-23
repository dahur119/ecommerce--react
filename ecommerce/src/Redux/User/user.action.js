import userTypes from "./user.types";



export const emailSignInStart = userCredentials =>({
    type: userTypes.EMail_SIGN_IN_START,
    payload:userCredentials
});

export const signInSucess = user =>({
    type:userTypes.SIGN_IN_SUCCESS, 
    payload:user
});

export const checkUserSection = () =>({
    type:userTypes.CHECK_USER_SESSION
});

export const setCurrentUser = user => ({
    type:userTypes.SET_CURRENT_USER,
    payload: user
});

export const signOutUserStart  =() =>({
    type:userTypes.SIGN_OUT_USER_START
});

export const signOutUserSuccess =()=>({
    type:userTypes.SIGN_OUT_USER_SUCCESS
});

export const signUpUserSuccess =  userCredentials =>({
    type:userTypes.SIGN_UP_USER_START,
    payload:userCredentials
})
export const userError = err => ({
    type: userTypes.USER_ERROR,
    payload: err
  });

export const resetPasswordStart = userCredentials=>({
    type:userTypes.RESET_PASSWORD_START,
    payload:userCredentials
})

export const resetPasswordSuccess = () =>({
    type:userTypes.RESET_PASSWORD_SUCCESS,
    payload:true
})

export const resetUserState = () =>({
    type:userTypes.RESET_USER_STATE
})

export const googleSignStart =() =>({
    type:userTypes.GOOGLE_SIGN_IN_START
    
})
// export const signInUser =({ email, password})=> async dispatch =>{
//     // try{
//     //     await auth.signInWithEmailAndPassword(email, password);
//     //     dispatch({
//     //         type:userTypes.SIGN_IN_SUCCESS,
//     //         payload:true
//     //     });

//     //   }catch(err){
//     //   }
// }

export const resetAllForm =() =>({
    type:userTypes.RESET_AUTH_FORM
})

// export const signUpUser = ({ name, email, password, confirmPassword}) => async dispatch =>{
    //     if(password !== confirmPassword){
    //   const err = ['password Don\'t match'];
    //   dispatch({
    //     type:userTypes.SIGN_UP_ERROR,
    //     payload:err
    //   })
    //   return;
    // }

    // try{
    //  const {user} = await auth.createUserWithEmailAndPassword(email, password)
 
    //  await handleUserProfile(user, { name })
    //  dispatch({
    //     type:userTypes.SIGN_UP_SUCCESS,
    //     payload:true
    //  })


    // }catch(err){

    // }


export const emailReset =({email}) => async dispatch =>{
    const config = {
        url: 'http://localhost:3000/login'

    }
    
    // try{
    //     await auth.sendPasswordResetEmail(email,config)
    //         .then(()=>{
    //             dispatch({
    //                 type:userTypes.RESET_PASSWORD_SUCCESS,
    //                 payload:true
    //             })
    //             // props.history.push('/login')
    //         })
    //         .catch(()=>{
    //             const err =['Email not Found Please Try Again']
    //             dispatch({
    //                 type:userTypes.RESET_PASSWORD_ERROR,
    //                 payload:err
    //             })
         
    //             // setErrors(err)
    //         })

    // }catch(err){

    // }
}

// export const signInWithGoogle = () => async dispatch =>{

//     try{
//        await auth.signInWithPopup(GoogleProvider)
//        .then(()=>{
//         dispatch({
//             type:userTypes.SIGN_IN_SUCCESS,
//             payload:true
//         });

//        })

//     }catch(err){

//     }
    
// }