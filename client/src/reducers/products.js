import { GET_ALL_PRODUCTS,GET_PRODUCT_BY_CATEGORY } from "../constants/actionTypes";
export default (products=[],action)=>{
    // console.log("Reducer: ", products, action);
    switch(action.type){
        case GET_ALL_PRODUCTS:
            {
            // console.log("GET_ALL_PRODUCTS REDUCER");
            // console.log(action.payload)
            return action.payload;
            }
        case GET_PRODUCT_BY_CATEGORY:{
            console.log("GET_PRODUCT_BY_CATEGORY REDUCER");
            console.log(action.payload);
            return action.payload;
        }
        default:
                return products;
                //default must return posts, otherwise there will be some issues
        }
    }
    