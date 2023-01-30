# mern amazona

# Lessons

1. Introduction
2. install tools
3. Create react App
4. Create github repository

5. List Products

   1. create products array
   2. add product images
   3. render products
   4. style products

6. Add page routing

   1. npm i react-router-dom
   2. create route for home screen
   3. create router for product screen

7. Create Node.JS Server

   1. run npm init in root folder
   2. Update package.json set type: module
   3. Add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create route for / return backend is ready.
   9. move products.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm start

8. Fetch products from backend

   1. set proxy in package.json
   2. npm install axios
   3. use state hook
   4. use effect hook
   5. use reducer hook

9. Manage state by Reducer Hook

   1. definereducer
   2. update fetch data
   3. get state from useReducer

10. Add Bootstrao UI Framework

    1.npm install react-bootstrap
    2.update App.js

11. Create product and rating component

    1.create rating component
    2.areate product component
    3.use rating component in product component

12. Create Product Details Screen
    1.fetch products from backend
    2.create 3 columns for image, info and action

13. Create Loading and Message Component
    1.create loading component
    2.use spinner component
    3.create message component
    4.create utils.js to define getError function

14. Implement Add to Cart
    1.Create react context
    2.Define reducer
    3.Create store provider
    4.Implement add to cart button click handler

15. Complete Add to Cart
    1.check exist item in the cart
    2.check count in stock in backend

16. Create Cart Screen
    1.create 2 columns
    2.display item list
    3.create action column

17. Complete Cart Screen
    1.click handler for increment/decrement item
    2.click handler for remove item
    3.click handler for checkout

18. Create Signin Screen
    1.create Signin form
    2.add email and password
    3.add signin button

19. Connect to MongoDB Database
    1.create atlas mongoDb database
    2.install local MongoDB database
    3.npm install mongoose
    4.connect to mongoDB database

20. seed sample data
    1.create product model
    2.create user model
    3.create seed route
    4.use route in server.js
    5.seed sample product

21. seed Sample users
    1.Create user model
    2.seed sample users
    3.create user routes
