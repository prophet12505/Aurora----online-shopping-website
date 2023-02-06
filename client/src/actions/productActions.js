import * as api from "../api";
import { GET_ALL_PRODUCTS,GET_PRODUCT_DETAIL_BY_CLICK,GET_PRODUCT_BY_CATEGORY } from "../constants/actionTypes";

export const getAllProductsAction=()=>async(dispatch)=>{
    //console.log("ACTION GET_ALL_PRODUCTS");
    const {data}=await api.fetchAllProducts();
    dispatch({
        type:GET_ALL_PRODUCTS,
        payload:data
    })
}

export const getProductDetailByClickAction=(id)=>async(dispatch)=>{
    try {
    console.log("ACTION GET_PRODUCT_DETAIL_BY_CLICK");
    console.log("id:"+id);
    const {data}=await api.getProductById(id);
    console.log(data);
    dispatch({
        type:GET_PRODUCT_DETAIL_BY_CLICK,
        payload:data
    });
    } catch (error) {
        console.log(error);   
    }
    
}

export const getProductByCategoryAction=(categoryId)=>async(dispatch)=>{
    console.log("ACTION GET_PRODUCT_BY_CATEGORY");
    const {data}=await api.getProductByCategory(categoryId);
    console.log(data);
    dispatch({
        type:GET_PRODUCT_BY_CATEGORY,
        payload:data
    });
}