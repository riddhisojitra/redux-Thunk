import { DELETE_PRODUCT, FETCH_PRODUCT } from "../Action/ActionType";

const initialstate = {
  product: [],
  loading:false
};

const Reducerlist = (state = initialstate,action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
     console.log('data',action.payload);
      return {    
          ...state,
          product:action.payload,
          loading:false
      }
    case DELETE_PRODUCT:
      const getRecord = state?.product?.filter(productId => productId.id !== action.payload)
      console.log("productid",state?.product);
      return{
        ...state,
        // product:state.product.filter(productId => productId !== action.payload),
        product:getRecord,
       
        loading:true
      }
    default:
      return state;
  }
}
export default Reducerlist;