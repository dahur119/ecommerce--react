import {takeLatest, put, all, call } from 'redux-saga/effects'
import productsTypes from './product.types'
import { handleAddProject} from './product.helpers'
import { auth } from '../../firebase/firebase'
import { setProducts, fetchProductsStart } from './product.action'
import { handleFetchProduct, handleDeleteProduct } from './product.helpers'


export function* addProduct({ payload:{
    productName,
    ProductThumbnail,
    productPrice,
    ProductCategory,
    productDesc

}}){
    try{
        const timestamp = new Date()
        yield handleAddProject({
            productName,
            ProductThumbnail,
            productPrice,
            ProductCategory,
            productDesc,
            productAdminUserID: auth.currentUser.uid,
            createdDate:timestamp
        })

        yield put(
            fetchProductsStart()
        )

    }catch(err){
        
    }
}

export function* fetchProducts({payload}) {
    try {
      const products = yield  handleFetchProduct(payload);
      yield put(
        setProducts(products)
      );
  
    } catch (err) {
      console.log(err)
    }
  };

export function* deleteProduct({ payload}){
    try{
        yield handleDeleteProduct(payload)
        yield put(
            fetchProductsStart()
        );

    }catch(err){

    }
};

export function* onDeleteProductStart(){
    yield takeLatest(productsTypes.DELETE_PRODUCT_START, deleteProduct)
}

export function* onFetchProductsStart(){
    yield takeLatest(productsTypes.FETCH_PRODUCTS_START,fetchProducts)
};

export function* onAddProductStart() {
    yield takeLatest(productsTypes.ADD_NEW_PRODUCT_START, addProduct);
};

export default function* productSaga(){
    yield all([
        call(onAddProductStart),
        call(onFetchProductsStart), 
        call(onDeleteProductStart)
       
      
      
    ])
}