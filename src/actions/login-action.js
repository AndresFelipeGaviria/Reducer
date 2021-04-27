import React, { useState } from 'react';
import axios from 'axios';


export const jsonData = () => {
    return new Promise((resolve, reject)=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => { console.log(response);resolve(response.data[0])})
        .catch(err => {throw new Error(err)})
    })
};




