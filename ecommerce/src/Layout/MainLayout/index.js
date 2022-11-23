import React from "react";
import Header from "../../component/Header";
import Footer from "../../pages/Footer";

const MainLayout = props => {
    return (
      <div>
        <Header {...props } />
        <div className="main">
          {props.children}
        </div>
        <Footer></Footer>

    
      </div>
    );
  };
  
  export default MainLayout;
  