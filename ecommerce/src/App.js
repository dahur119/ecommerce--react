import React, { useEffect } from "react";

import Registration from "./pages/Registration";
import { Route, Switch, Redirect } from "react-router-dom";
import {checkUserSection} from './Redux/User/user.action'

import AdminToolBar from "./component/AdminToolbar";

//hic
import WithAdminAuth from "./hoc/withAdminAuth";
import WithAuth from "./hoc/withAuth";

//layout
import HomepageLayout from "./Layout/HomepageLayout.js/HomepageLayout";
import MainLayout from "./Layout/MainLayout";
import './default.scss'

//pages
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Reset from "./pages/Reset";
import Recovery from "./pages/Recovery";
import Dashboard from "./pages/Dashboard";
import { useDispatch } from "react-redux";
import Admin from "./pages/Admin";
import Search from "./pages/Search";

const App =(props)=>{
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSection());

  }, []);

    return (   
      <div className="App">  
         <AdminToolBar></AdminToolBar>
      <Switch>
     
      <Route exact path="/" 
       render={()=>(
       <HomepageLayout  >  
        <Homepage/>  
        </HomepageLayout> )}/>
        
      <Route path="/register" render={()=> (
         <HomepageLayout   >
         <Registration/>
      </HomepageLayout>)}/>

      
     
  
      <Route path="/login" render={()=> (
        <HomepageLayout  >
        <Login/>
     </HomepageLayout>)} />
  
     <Route path="/reset" render={()=> 
        <HomepageLayout  >
        <Reset/>
     </HomepageLayout>}/>

     <Route path="/recovery" render={()=> 
        <MainLayout  >
        <Recovery/>
     </MainLayout>}/>

     <Route path="/dashboard" render={()=> 
     <WithAuth>
      
      <MainLayout  >
    <Dashboard/>
     </MainLayout>

     </WithAuth>

}/>

     <Route path="/admin" render={()=>  
     <WithAdminAuth>
       <MainLayout  >
           <Admin/>
     </MainLayout> 

     </WithAdminAuth>
        
     
     }/>
     
     <Route path="/search" render={()=>  
   
       <MainLayout  >
          <Search/>
     </MainLayout> 

        
     
     }/>
     

      </Switch>
        
        
      </div>
        
  
    )

  

  
}


export default App
