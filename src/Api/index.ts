import axios from 'axios';

export const order  = axios.create({
    baseURL:'http://localhost:3333/order',
    headers:{
        'Content-Type':'application/json;charset=utf-8'
    }
})

export const authenticate  = axios.create({
    baseURL:'http://localhost:3333/authenticate',
    headers:{
        'Content-Type':'application/json;charset=utf-8'
    }
})

export const register  = axios.create({
    baseURL:'http://localhost:3333/register',
    headers:{
        'Content-Type':'application/json;charset=utf-8'
    }
})

export const items  = axios.create({
    baseURL:'http://localhost:3333/items',
    headers:{
        'Content-Type':'application/json;charset=utf-8'
    }
})
