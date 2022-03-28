import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import {createWebHistory, createRouter} from 'vue-router';
import Home from './components/Home.vue';
import Profile from './components/Profile.vue';

import Customer from './components/Customer.vue';
import addCust from './components/addCust.vue';
import upCust from './components/upCust.vue';

import Product from './components/Product.vue';
import addProduct from './components/addProduct.vue';
import upProduct from './components/upProduct.vue';

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path : '/', name : "Home", component : Home},
        {path : '/profile', name : "Profile", component : Profile},

        {path : '/cust', name : "Customer", component : Customer},
        {path : '/cust/addCust', name : "addCust", component : addCust},
        {path : '/cust/upCust/:id', name : "upCust", component : upCust},

        {path : '/product', name : "Product", component : Product},
        {path : '/product/addProduct', name : "addProduct", component : addProduct},
        {path : '/product/upProduct/:id', name : "upProduct", component : upProduct},
    ],
    base : "/"
})

const app = createApp(App)
app.use(router)
app.config.globalProperties.axios = axios
app.mount('#app')
app.use(VueSweetalert2)