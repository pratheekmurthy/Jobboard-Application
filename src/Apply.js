import React,{useState} from 'react'
import Form from './form'
import axios from 'axios'
import Admin from './Admin'

const Apply =(props)=>{
    document.body.style = 'background-color: #ff0080';


const formSubmit=(data)=>{
    console.log("data",data);
    axios.post("http://dct-application-form.herokuapp.com/users/application-form",data)
        .then((response)=>{
            const result = response.data;
            console.log(result); 
            // window.location.reload();
        })
        .catch((err)=>{
            console.log(err.message);
        })
        
    }

    return (
        <div>
            <Form formSubmit={formSubmit} />
        </div>
    ) 

}

export default Apply


