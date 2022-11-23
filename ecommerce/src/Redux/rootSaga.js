import {all, call} from 'redux-saga/effects'
import userSagas from  './User/user.sagas'
import productSaga from './Product.js/product.saga'

export default function* rootSaga(){
    yield all([
        call(userSagas),
        call(productSaga)
        
      
    
    
    ])
}