import React,{useState} from 'react'
import axios from 'axios'
import './App.css'
import Modal from 'react-modal'
import { Formik } from 'formik';
import * as Yup from 'yup'
import Apply from './Apply'



const formSchema = Yup.object().shape(({
       
        name : Yup.string().required(),
        email : Yup.string().required().email(),
        phone :Yup.string().required(),
        experience :Yup.string().required(),
        jobTitle :Yup.string().required(),
        skills :Yup.string().required()
}))

const Form =(props)=>{
    
    const {formSubmit} = props
    return(<div>
       <Formik initialValues ={{
           
           name: "",
           email:"",
           phone :"",
           skills :"",
           jobTitle :"",
           experience :""
           
           

       }}
 validationSchema ={formSchema}
       
       onSubmit={(data,onSubmitProps)=> {formSubmit(data) 
       onSubmitProps.resetForm()} }>
           {({
               handleSubmit,
               handleChange,
               handleBlur,
               values,
               errors,
               touched,
               resetForm
            
           })=>{
            // console.log(errors)
               return( <div >
                   <div class="font">
                   <div class="col d-flex justify-content-center" >
                <div class="card" style={{width: "30rem", height:"25rem" , position :"absolute" ,left:"500px" ,top: "100px" }}>
                <div class="card-body">
                <form onSubmit ={handleSubmit}>
                    <tabel>
                       <div>
                           <tr>
                               <td><label >Name :</label></td>
                               <td><input type ="text" name={"name"} value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder={"name"}/>{errors.name && touched.name && <p>{errors.name}</p>}</td>
                           </tr>
                            <tr>
                                <td> <label >Email :  </label></td>
                                <td><input type ="text" name={"email"} value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder={"email"}/>{errors.email && touched.email && <p>{errors.email}</p>}</td>
                            </tr>
                            <tr>
                                <td><label >Phone : </label></td>
                                <td><input type ="text" name={"phone"} value={values.Phone} onChange={handleChange} onBlur={handleBlur} placeholder={"+91 990 000 0001"}/>{errors.phone && touched.phone && <p>{errors.phone}</p>}</td>
                            </tr>
                            <tr>
                                <td><label >Experience : </label></td>
                                <td><input type ="text" name={"experience"} value={values.experience} onChange={handleChange} onBlur={handleBlur} placeholder={"2 years 3 months"}/>{errors.experience && touched.experience && <p>{errors.experience}</p>}</td>
                            </tr>
                            <tr>
                                <td><label>Applying for Job : </label></td>
                                <td> <select name={"jobTitle"} value={values.jobTitle} onChange={handleChange} onBlur={handleBlur} >
                                <option value="">select Job</option>
                               <option value="Front-End Developer"> Front-End Developer</option>
                               <option value="Node.js Developer"> Node js Developer</option>
                               <option value="MEAN Stack Developer"> MEAN Stack Developer</option>
                               <option value="FULL Stack Developer"> FULL Stack Developer</option>
                           </select>{errors.jobTitle && touched.jobTitle && <p>{errors.jobTitle}</p>}<br/>
                                </td>
                            </tr>
                            <tr>
                                <td><label >Skills : </label></td>
                                <td><input type ="text" name={"skills"} value={values.skills} onChange={handleChange} onBlur={handleBlur} placeholder={"HTML,CSS,Javascript"}/>{errors.skills && touched.skills && <p>{errors.skills}</p>}</td>
                            </tr>
                            <tr><td></td>
                           <td><button className="Button" id="submit" type={"submit"}>submit</button></td></tr>
                       </div>
                       </tabel>
                   </form>
                   </div>
                </div>
              </div>
              </div>
              </div>    
               )
           }}


       </Formik>
        
    </div>)
}

export default Form