import DisabledContext from "antd/lib/config-provider/DisabledContext";
import { firestore } from "../../firebase/firebase";

export const handleAddProject =product =>{
    return new Promise((resolve, reject)=>{
        firestore
            .collection('products')
            .doc()
            .set(product)
            .then(()=>{
                resolve()
            })
            .catch(err=>{
                reject(err)
            })
    })
}

export const handleFetchProduct = () => {
    return new Promise((resolve, reject) => {
      firestore
      
        .collection('products')
        .get(productID)
        .then(snapshot => { 
            const productArray = snapshot.docs.map(doc =>{
                return {
                    ...doc.data(),
                    documentID: doc.id 
                }
            });
            console.log(productArray)
            resolve(productArray)
         
         
        })
        .catch(err => {
          reject(err);
        })
    })
}

export const handleDeleteProduct = documentID => {
    return new Promise((resolve, reject) => {
      firestore
        .collection('products')
        .doc(documentID)
        .delete()
        .then(() => {
          console.log(documentID, 2)
          resolve();
        })
        .catch(err => {
          reject(err);
        })
    });
  }
  

