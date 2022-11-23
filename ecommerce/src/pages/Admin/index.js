import React from "react";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import './style.scss'
import Button from "../../component/forms/Button";
import FormInput from "../../component/forms/formInput/input";
import Modal from "../../component/Modal";
import FormSelect from "../../component/forms/formSelect";
import { addProductStart, deleteProductStart, fetchProductsStart } from "../../Redux/Product.js/product.action";

const mapState = ({ productsData }) => ({
  products: productsData.products
});


const Admin = props =>{
    const dispatch = useDispatch();
    const { products } = useSelector(mapState);
    console.log('checker',products)
    const [hideModal, setHideModal] = useState(true)
    const [productName, setProductName] = useState('');
    const [ProductThumbnail,  setProductThumbnail] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [ProductCategory,setProductCategory] = useState('')
    const [productDesc, setProductDesc] = useState('')

    useEffect(()=>{
        dispatch(
            fetchProductsStart()
        );

    },[])


    const toggleModal =()=>setHideModal(!hideModal)
    
    const configModal = {
        hideModal,
        toggleModal
    }
    
    const resetForm =()=>{
        setHideModal(true);
        setProductCategory('mens');
        setProductName('');
        setProductThumbnail('');
        setProductCategory('');
        setProductDesc('');
    };

    const handleSubmit = e =>{
        e.preventDefault()
        dispatch(addProductStart({
            productName,
            ProductThumbnail,
            productPrice,
            ProductCategory,
            productDesc

        }));

        resetForm();
    };

    return (
        <div className="admin">
            <div className="callToActions">
                <ul>
                    <li>
                        <Button onClick={()=>toggleModal()}>
                            Add New Product
                        </Button>

                    </li>
                </ul>
            </div>
            <Modal {...configModal}>
            <div className="addNewProductForm">
                <form onSubmit={handleSubmit}>
                    <h2>
                        Add New Product
                    </h2>
                    <FormSelect
                    label="Category"
                    options={[{
                        value: "mens",
                        name: "Mens"
                    }, {
                        value: "womens",
                        name: "Womens"
                    }]}
                    handleChange={e => setProductCategory(e.target.value)}
                    />

                    <FormInput
                    label="Name"
                    type="text"
                    value={productName}
                    handleChange={e=>setProductName(e.target.value)} 
                    />
                      <FormInput
                    label="Main image URL"
                    type="url"
                    value={ProductThumbnail}
                    handleChange={e => setProductThumbnail(e.target.value)}
                    />

                    <FormInput
                    label="Price"
                    type="number"
                    min="0.00"
                    max="10000.00"
                    step="0.01"
                    value={productPrice}
                    handleChange={e => setProductPrice(e.target.value)}
                    />
               
            <Button type="submit">
              Add product
            </Button>
                
                </form>
                

            </div>

            </Modal>
            <div className="manageProducts">

        <table border="0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <th>
                <h1>
                  Manage Products
                </h1>
              </th>
            </tr>
            <tr>
              <td>
                <table className="results" border="0" cellPadding="10" cellSpacing="0">
                  <tbody>
                    {products.map((product, index) => {
                      const {
                        productName,
                        productThumbnail,
                        productPrice,
                        documentID
                      
                      } = product;

                      return (
                        <tr key={index}>
                          <td>
                            <img className="thumb" src={productThumbnail} />
                          </td>
                          <td>
                            {productName}
                          </td>
                          <td>
                            £{productPrice}
                          </td>
                          <td>
                            <Button onClick={()=>dispatch(deleteProductStart(documentID))}>DELETE</Button>
                            
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>

              </td>
            </tr>
            <tr>
              <td>
                <table border="0" cellPadding="10" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>
                       
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

            
         

        </div>
    )
}
export default Admin