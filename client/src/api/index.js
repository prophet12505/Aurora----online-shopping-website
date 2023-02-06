import axios from "axios"
//local url
//const url="http://localhost:8080";
//heroku url
const url="https://aurora--online-shopping-websit.herokuapp.com";
// products 
export const fetchAllProducts=()=>{
    try {
        const res=axios.get(url+"/products/all");
        //console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
}


// user 
export const login=(userLoginData)=>{
    try {
        console.log("axios userLoginData:");
        console.log(userLoginData);
        const res=axios.post(url+"/login",userLoginData);
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const signup=(userSignupData)=>{
    try {
        const res=axios.post(url+"/signup",userSignupData);
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const getProductById=(id)=>{
    try {
        const res=axios.get(url+"/products/details",{
            
                params:{
                    id:id
                }
            
        });
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const verifyEmail=(token)=>{
    try {
        const res=axios.get(url+"/verify-email",{
            params:{
                token:token
            }
        })
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const keepLoginState=(token)=>{
    try {
        const res=axios.get(url+"/keep-login-state",{
            params:{
                token:token
            }
        })
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const getAllCategories=()=>{
    try {
        const res=axios.get(url+"/categories/all");
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const getProductByCategory=(categoryId)=>{
    try {
        const res=axios.get(url+"/get-product-by-category",{
            params:{
                categoryId:categoryId
            }
        });
        return res;
    } catch (error) {
        console.log(error);
    }
}
export const addToCart=(userId,productId,quantity)=>{
    try{
        const res=axios.get(url+"/cart/add-to-cart",{
            params:{
                userId:userId,
                productId:productId,
                quantity:quantity
            }
        });
        return res;
    } catch (error) {
        console.log(error);
    }
}
export const getAllCartItems=(userId)=>{
    try {
        const res=axios.get(url+"/cart/get-cart-items-by-userid",{
            params:{
                userId:userId
            }
        });
        return res;
    } catch (error) {
        console.log(error);
    }
}