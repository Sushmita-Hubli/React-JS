import React, { useState } from 'react'
import {Formik, Form, Field} from 'formik';

const FormikForm = () => {
    const [formData,setFormData]=useState({});
  return (
    <div>
    <Formik 
    initialValues={{name:"",age:"",pass:"",gender:"",hobby:"",country:"",comments:""}}
    onSubmit={(values)=>{
        console.log(values)
        setFormData(values);
    }}
    >
    <Form>
        <label >Enter Name:</label>
        <Field type="text" name="name"/>
        <br></br>
        <label >Enter Age:</label>
        <Field type="number" name="age"/>
        <br></br>
        <label >Enter Password:</label>
        <Field type="password" name="pass"/>
        <br></br>
        <label >Gender:</label><br></br>
        <label>Male</label>
        <Field type="radio" name="gender" value="Male"/>
        <label>Female</label>
        <Field type="radio" name="gender" value="Female"/>
        <br></br>
        <label>Hobbies:</label>
        <label>Writing</label>
        <Field type="checkbox" name="hobby" value="Writing"/>
        <label>Singing</label>
        <Field type="checkbox" name="hobby" value="singing"/>
        
        <label>Dancing</label>
        <Field type="checkbox" name="hobby" value="Dancing"/>
        
        <br></br>
        <label>Country:</label>
        <Field name="country" as="select">
        <option value="India">India</option>
        <option value="USA">USA</option>

        </Field>
        <br></br>
        <label>Comments:</label>
        <Field as="textarea" name="comments"/>
        <br></br>
        <button type='submit'>Submit</button>
    </Form>

    </Formik>
    <h1>{JSON.stringify(formData)}</h1>
      
    </div>
  )
}

export default FormikForm
