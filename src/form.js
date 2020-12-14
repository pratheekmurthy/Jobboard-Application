import React,{useState} from 'react'
import axios from 'axios'
import './App.css'

import validator from 'validator'
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
       
       onSubmit={(data)=> formSubmit(data) }>
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
               return( 
                <div class="card" style={{width: "18rem"}}>
                <div class="card-body">
                <form onSubmit ={handleSubmit}>
                       <div>
                       <label >Name</label>
                           <input type ="text" name={"name"} value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder={"name"}/>{errors.name && touched.name && <p>{errors.name}</p>}<br/>
                           <label >Email : </label>
                           <input type ="text" name={"email"} value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder={"email"}/>{errors.email && touched.email && <p>{errors.email}</p>}<br/>
                           
                           <label >Phone : </label>
                           <input type ="text" name={"phone"} value={values.Phone} onChange={handleChange} onBlur={handleBlur} placeholder={"+91 990 000 0001"}/>{errors.phone && touched.phone && <p>{errors.phone}</p>}<br/>
                           <label >Experience : </label>
                           <input type ="text" name={"experience"} value={values.experience} onChange={handleChange} onBlur={handleBlur} placeholder={"2 years 3 months"}/>{errors.experience && touched.experience && <p>{errors.experience}</p>}<br/>
                           <label>Applying for Job : </label>
                           <select name={"jobTitle"} value={values.jobTitle} onChange={handleChange} onBlur={handleBlur} >
                                <option value="">select Job</option>
                               <option value="Front-End Developer"> Front-End Developer</option>
                               <option value="Node.js Developer"> Node js Developer</option>
                               <option value="MEAN Stack Developer"> MEAN Stack Developer</option>
                               <option value="FULL Stack Developer"> FULL Stack Developer</option>
                           </select>{errors.jobTitle && touched.jobTitle && <p>{errors.jobTitle}</p>}<br/>
                           <label >Skills : </label>
                           <input type ="text" name={"skills"} value={values.skills} onChange={handleChange} onBlur={handleBlur} placeholder={"HTML,CSS,Javascript"}/>{errors.skills && touched.skills && <p>{errors.skills}</p>}<br/>
                           <button className="Button"type={"submit"}>submit</button>
                       </div>

                   </form>
                </div>
              </div>
                   
               )
           }}


       </Formik>
        
    </div>)
}

export default Form


{/* <label>Full Name</label> - <input type="text" value={name} onChange={handleName}/> {formErrors.name && <span> { formErrors.name } </span>}<br/>
<br/><label>Email Address</label> - <input type="text" placeholder="example@gmail.com" value={email} onChange={handleEmail}/> {formErrors.email && <span> { formErrors.email } </span>}<br/>
<br/><label>Contact Number</label> - <input type="text" placeholder="+91 9972387689" value={phone} onChange={handlePhone}/>{formErrors.phone && <span> { formErrors.phone } </span>}<br/>
<br/><label>Experience</label> - <input type="text" placeholder="2 years 3 months" value={exp} onChange={handleexp}/>{formErrors.exp && <span> { formErrors.exp } </span>}<br/>
<br/><label>Applying for Job</label> -
<select value={job}  onChange={handledropdown}>
<option value="">----Select-----</option>
<option value="Front-End Developer">Front-End Developer</option>
<option value="Node.js Developer">Node js Developer</option>
<option value="MEAN Stack Developer">MEAN Stack Developer</option>
<option value="FULL Stack Developer">FULL Stack Developer</option>
</select>{formErrors.job && <span> { formErrors.job } </span>} <br/>
<br/><label>Technical Skills</label> - <textarea  value={skills} onChange={handleSkill}/>{formErrors.skills && <span> { formErrors.skills } </span>}<br/> */}




