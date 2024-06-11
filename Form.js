import React from 'react';
import './Form.css';
import {  useFormik } from 'formik';

const validate =values =>{
     const errors ={};
     if(!values.firstname){
    
      errors.firstname ="Required";
     }
     else if(values.firstname.length >8){
      errors.firstname ="Must be characters or less";
     }
     if(!values.email){
      errors.email ="Required";
     }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
      

     
     if(!values.password){
      errors.password ="Required";
     }
     else if(values.password.length >8){
      errors.password ="Must password is 8";
     }
     if(!values.cpassword){
      errors.cpassword =" Required";
     }else if(values.password !== values.cpassword){
      errors.cpassword ="Password must match";
     }
     
     
     return errors;
}
const Form =()=>{
  const formik =useFormik({
          initialValues :{
               firstname :'',
               email :'',
               password :'',
               cpassword :'',
          },
          validate,
          onSubmit : (values, {resetForm}) =>{
            resetForm();
                console.log(formik.values);

          
          }
  });
  return (
    <div className ='main'>
    <div className ="Signup-form">
      <h1>Login form </h1>
      <form onSubmit ={formik.handleSubmit} autoComplete='off' >
      <br></br>
      
      <label>Name :</label>
      <input type='text' placeholder='Enter your fullname' name='firstname' autoComplete='off' onChange ={formik.handleChange} value ={formik.values.firstname}/>
        {
          
          formik.errors.firstname ? <span>{formik.errors.firstname}</span> :null
          
        }
                <br></br><br></br>

        <label>Email :</label>
     <input type='email' placeholder='Enter your Email' name='email' autoComplete='off' onChange ={formik.handleChange} value ={formik.values.email}/>
     {
          formik.errors.email ? <span>{formik.errors.email}</span> :null
        }
          <br></br><br></br>

<label>Password :</label>
    
      <input type='password' placeholder='Enter your Password' name='password' autoComplete='off' onChange ={formik.handleChange} value ={formik.values.password}/>
      {
          formik.errors.password ? <span>{formik.errors.password}</span> :null
        }
          <br></br><br></br>

<label>Confirm Password :</label>
        
      <input type='password' placeholder='Enter your cpassword' name='cpassword' autoComplete='off' onChange ={formik.handleChange} value ={formik.values.cpassword}/>
      {
          formik.errors.cpassword ? <span>{formik.errors.cpassword}</span> :null
        }
        
        
      <input type='submit' class ="btn btn-success" value='Submit'/>
      

      
      </form>

    </div>
    </div>
    
  )
      }
  

export default Form
