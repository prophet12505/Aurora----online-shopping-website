# Aurora----online-shopping-website
Techstack: Springboot, Hibernate, Junit, Maven, React.js   
version:0.0.13
## Open the website: 

frontend repository:    
https://github.com/prophet12505/Aurora-frontend    

backend APi url:
https://aurora--online-shopping-websit.herokuapp.com/









# API documentation
=====User related===============
## SIGNUP
sign up
### HTTP REQUEST
POST /signup
back end signup up user(if not duplicated email), write email to user account
### REQUEST BODY
| Name     | Type   | Description          | Required(default yes) |
|----------|--------|----------------------|--)---------------------|
| name     | String | name of the user     |                       |
| email    | String | email of the user    |                       |
| password | String | password of the user |                       |

### RESPONSE BODY(signupDTO)
| Name             | Type    | Description                    | Required(default yes) |
|------------------|---------|--------------------------------|-----------------------|
| signed_up        | Boolean | signed up successfully or not  |                       |
| signup_error_msg | String  | if sign up failed, the message |                       |
| name             | String  | name of the user               |                       |
| email            | String  | email of the user              |                       |
| password         | String  | password of the user           |                       |

## VERIFY EMAIL
VERIFY EMAIL
### HTTP REQUEST
GET /verify-email?token={token}  
token is encoded email and password, back end produce login logic, set up email_is_verified = true

### RESPONSE BODY(User) -- immediately log in after verification 
| Name             | Type    | Description                    | Required(default yes) |
|------------------|---------|--------------------------------|-----------------------|
| name             | String  | name of the user               |                       |
| email            | String  | email of the user              |                       |
| password         | String  | password of the user           |                       |

## LOGIN
login
### HTTP REQUEST
POST /login  
token is encoded email and password, back end produce login logic, set up email_is_verified = true
### REQUEST BODY
| Name              | Type   | Description                   | Required(default yes) |
|-------------------|--------|-------------------------------|-----------------------|
| email  | String | email  |                       |
| password          | String | password of the user          |                       |

### RESPONSE BODY(loginResDTO)
| Name          | Type    | Description                   | Required(default yes) |
|---------------|---------|-------------------------------|-----------------------|
| loggedIn      | Boolean | logged in successfully or not |                       |
| loginErrorMsg | String  | if log in failed, the message |                       |
| name          | String  | name of the user              |                       |
| email         | String  | email of the user             |                       |
| password      | String  | password of the user          |                       |

## KEEP_LOGIN_STATE_BY_SERVER_CALL
KEEP_LOGIN_STATE_BY_SERVER_CALL
### HTTP REQUEST
GET /users/keep-login-state?token={token}  
token is encoded email , back end produce login logic

### RESPONSE BODY(loginResDTO)
| Name          | Type    | Description                   | Required(default yes) |
|---------------|---------|-------------------------------|-----------------------|
| loggedIn      | Boolean | logged in successfully or not |                       |
| loginErrorMsg | String  | if log in failed, the message |                       |
| name          | String  | name of the user              |                       |
| email         | String  | email of the user             |                       |





=============product related===============================
## GET ALL PRODUCTS
products
### HTTP REQUEST
GET /products/all  
back end use repository quickly get all
### RESPONSE BODY
List<Products>

## GET PRODUCTS BY ID
GET PRODUCTS BY ID
### HTTP REQUEST
GET /products/details?id={id}  
back end use repository quickly get by id
### RESPONSE BODY
Products entity


## CREATE PRODUCT
### HTTP REQUEST
POST /create-a-product
### REQUEST BODY
product
### RESPONSE BODY
generalMessageDTO


=============category related===============================
## GET ALL CATEORY
### HTTP REQUEST
`GET` /categories/all

### RESPONSE BODY
List <Category>

## GET PRODUCTS BY CATEGORY
GET PRODUCTS BY CATEGORY
### HTTP REQUEST
`GET` /products/get-product-by-category?categoryId={categoryId}

### RESPONSE BODY
List <Product>

=====================CART RELATED================================
## ADD CART
ADD CART
### HTTP REQUEST
GET /cart/add-to-cart/{userId,productId,quantity}
back end create a row in cart_item
### RESPONSE BODY
CartItem entity (actually it's useless, don't need to respond anything or we can use general message DTO)

## GET CART ITEMS BY USER ID
GET CART ITEMS BY USER ID
### HTTP REQUEST
GET /cart/get-cart-items-by-userid?userId=userId
return cart items list
### RESPONSE BODY
List<CartItems>




