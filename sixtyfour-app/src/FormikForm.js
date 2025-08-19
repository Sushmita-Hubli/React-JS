import React from 'react'
import {useFormik} from 'formik'
const FormikForm = () => {

    const formInitialValue={
        name:'',
        email:''
    }

    const formik=useFormik({
        initialValues:formInitialValue,
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
        <br></br>
         <label>Enter Email:</label>
        <input type="text" name="email" onChange={formik.handleChange} id="" value={formik.values.email} />
        <br></br><br></br>
        <input type="submit" value="Submit" />
       
      </form>
    </div>
  )
}

export default FormikForm
