import React from 'react'
import {useFormik} from 'formik'
import { FormSchema } from './FormSchema'
const FormikForm = () => {

    const formInitialValue={
        name:'',
        email:''
    }

    const formik=useFormik({
        initialValues:formInitialValue,
        validationSchema:FormSchema,
        onSubmit: (values)=>{
            console.log(values);
            console.log(values.name);
            console.log(values.email);
        }

    })

  return (
    <div>
      <h1>Formik Demo</h1>
      <form onSubmit={formik.handleSubmit}>
        <label>Enter Name:</label>
        <input type="text" name="name" onChange={formik.handleChange} id="" value={formik.values.name}/>
        <span style={{color:'red'}}>{formik.errors.name}</span>


        <br></br>
         <label>Enter Email:</label>
        <input type="text" name="email" onChange={formik.handleChange} id="" value={formik.values.email} />
        <span style={{color:'red'}}>{formik.errors.email}</span>

        <br></br><br></br>
        <input type="submit" value="Submit" />
       
      </form>
    </div>
  )
}

export default FormikForm
