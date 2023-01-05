
import axios from 'axios';
import BASE_URL from '../BaseUrl';
import { DELETE_PRODUCT, FETCH_PRODUCT } from './ActionType';


export const FetchProduct =()=> async (dispatch)=>{
    console.log("===a",BASE_URL);
          const response = await axios.get(`${BASE_URL}/products`);
          console.log('response',response);
          dispatch({type:FETCH_PRODUCT,payload:response.data});
    
}

export const DeleteProduct = (productsId)=> async (dispatch)=>{
    
    // console.log("product".productsId)
    const removeProduct = await axios.delete(`${BASE_URL}/products/${productsId}`)
    console.log('remove',removeProduct);
    dispatch({type:DELETE_PRODUCT,payload:productsId})
    
    

}

