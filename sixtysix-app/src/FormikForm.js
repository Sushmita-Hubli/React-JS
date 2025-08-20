import React from 'react'
import {useFormik} from 'formik'
import { FormSchema } from './FormSchema'
const FormikForm = () => {

    const formInitialValue={
        name:'',
        email:'',
        age:''
    }

    const formik=useFormik({
        initialValues:formInitialValue,
        validationSchema:FormSchema,
        onSubmit: (values, action)=>{
            console.log(values);
            console.log(values.name);
            console.log(values.email);
            console.log(values.age);
            action.resetForm();  //this line is used to reset the form
        }

    })

  return (
    <div>
      <h1>Formik Demo</h1>
      <form onSubmit={formik.handleSubmit}>
        <label>Enter Name:</label>
        <input type="text" name="name" onChange={formik.handleChange} id="" value={formik.values.name} onBlur={formik.handleBlur}/>
        {formik.errors.name && formik.touched.name ? (<span style={{color:'red'}}>{formik.errors.name}</span>
):null}

        <br></br>
         <label>Enter Email:</label>
        <input type="text" name="email" onChange={formik.handleChange} id="" value={formik.values.email} />
        {formik.errors.email && formik.touched.email? (<span style={{color:'red'}}>{formik.errors.email}</span>
):null}

<br></br>
 <label>Enter Age:</label>
        <input type="text" name="age" onChange={formik.handleChange} id="" value={formik.values.age} />
        {formik.errors.age && formik.touched.age? (<span style={{color:'red'}}>{formik.errors.age}</span>
):null}

        <br></br><br></br>
        <input type="submit" value="Submit" />
       
      </form>
    </div>
  )
}

export default FormikForm
