import React from 'react'
import { useFormik } from 'formik';
import './Signup.css'

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = "Name is Required"
    }
    else if (values.name.length > 8) 
    {
        errors.name = "Must be characters or Less"
    }
    if (!values.email) {
        errors.email = "Email is Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.pass) {
        errors.pass = "Password is Required"
    }
    else if (values.pass.length > 6) {
        errors.pass = "Must Password 6 allowed"
    }
    if (!values.gen) {
        errors.gen = "Gender must"
    }


    return errors;
}
const Signup = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            pass: '',
            gen: '',


        },
        validate,
        onSubmit: (values, { resetForm }) => {
            resetForm();
            console.log(formik.values);
}

    })

   return (
        <div className='main'>
            <form autoComplete='off' onSubmit={formik.handleSubmit}>
                <div className='form'>
                    <h1>Signup Form</h1>
                    <label>Name :</label>
                    <input type='text' name='name' autoComplete='off' onChange={formik.handleChange} value={formik.values.name} />
                    {
                        formik.errors.name ? <span>{formik.errors.name}</span> : null
                    }
                    <br></br><br></br>
                    <label>Email :</label>
                    <input type='email' name='email' autoComplete='off' onChange={formik.handleChange} value={formik.values.email} />
                    {
                        formik.errors.email ? <span>{formik.errors.email}</span> : null
                    }
                    <br></br><br></br>
                   <label>Password:</label>
                    <input type='password' name='pass' autoComplete='off' onChange={formik.handleChange} value={formik.values.pass} />
                    {
                        formik.errors.pass ? <span>{formik.errors.pass}</span> : null
                    }
                    <br></br><br></br>
                    <label>Gender :</label>
                    <br></br>
                    <select name="gen" onChange={formik.handleChange} value={formik.values.gen}>
                        <option value="">--Select one--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>

                    </select>
                    <br></br>
                    {
                        formik.errors.gen ? <span>{formik.errors.gen}</span> : null
                    }
                    <br></br>
                    <input type='checkbox' />I agree all condition
                    <br></br>
                    <input type='submit' class="btn btn-danger" value='Submit' />

                </div>
            </form>
        </div>
    )
}

export default Signup