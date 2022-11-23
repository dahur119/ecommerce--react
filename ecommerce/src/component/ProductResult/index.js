import React from "react";
import './style.scss'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchProductsStart } from "../../Redux/Product.js/product.action";



const mapState = ({productsData }) =>({
    products:productsData?.products
})


const ProductResult = ({}) =>{
    const dispatch = useDispatch()
    const {products} = useSelector(mapState)
    console.log('product RESULT',products)
    

    useEffect(()=>{
        dispatch(
            fetchProductsStart()
        );

    }, []);

    if(!Array.isArray(products)) return null

    if(products.length < 1){
        return (
            <div className="products">
                <p>
                    No search in the results
                </p>

            </div>
        )
    }

    return (
        <div>
            <h1>Browse product</h1>
            {products?.map((product,index)=>{
                 const {productName,productThumbnail,productPrice} = product;
                 if(!productThumbnail || !productName || typeof productPrice === 'undefined' ) return null

                 return(
                    <div key={index}>
                        {productName}
                        {productPrice}

                    </div>
                 )
            }               
           )}

        </div>
    )
}
export default ProductResult