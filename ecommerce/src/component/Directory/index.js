import React from "react";
import shopForWomen from '../../assest/images/pic.jpg'
import shopForMen from '../../assest/images/pic1.jpg'
import './style.scss'

function Directory(props){
    return(
        <div className="directory">
            <div  className="wrap">

            <div className="item"
            style={{ backgroundImage: `url(${shopForWomen})` }}>
                <a>shop For Men</a>
            </div>
            <div className="item"
            style={{ backgroundImage: `url(${shopForMen})` }}>
                <a>shop For Women</a>

            </div>

            </div>

          

        </div>
    )
}
export default Directory