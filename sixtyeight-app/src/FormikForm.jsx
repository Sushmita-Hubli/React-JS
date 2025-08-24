import React, { useState } from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import RedErrorMessage from './RedErrorMessage';

const FormikForm = () => {
    // const [formData,setFormData]=useState({});
const NewValidations=yup.object({
  name:yup.string().required("Name is Must"),
  age:yup.number().min(10).max(40).required("Age is must"),
  pass:yup.string().matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})',"Strong Password").required("Password is must"),
  gender:yup.string().required("Please select a gender"),
  hobby:yup.array().min(1,"Select at least one hobby"),
  country:yup.string().required("Country selection is must"),
  comments:yup.string().required("Comment is must")

})

  return (
    <div>
    <Formik 
    validationSchema={NewValidations}
    initialValues={{name:"",age:"",pass:"",gender:"",hobby:[],country:"",comments:""}}
    onSubmit={(values)=>{
        console.log(values)
        // setFormData(values);
    }}
    >
    <Form>
        <label >Enter Name:</label>
        <Field type="text" name="name"/>
        <RedErrorMessage name='name'/>
        <br></br>
        <label >Enter Age:</label>
        <Field type="number" name="age"/>
        <RedErrorMessage name='age'/>
        <br></br>
        <label >Enter Password:</label>
        <Field type="password" name="pass"/>
        <RedErrorMessage name='pass'/>
        <br></br>
        <label >Gender:</label><br></br>
        <label>Male</label>
        <Field type="radio" name="gender" value="Male"/>
        <label>Female</label>
        <Field type="radio" name="gender" value="Female"/>
        <RedErrorMessage name='gender'/>
        <br></br>
        <label>Hobbies:</label>
        <label>Writing</label>
        <Field type="checkbox" name="hobby" value="Writing"/>
        <label>Singing</label>
        <Field type="checkbox" name="hobby" value="singing"/>
        
        <label>Dancing</label>
        <Field type="checkbox" name="hobby" value="Dancing"/>
        <RedErrorMessage name='hobby'/>
        <br></br>
        <label>Country:</label>
        <Field name="country" as="select">
        <option value="">Select</option>
        <option value="India">India</option>
        <option value="USA">USA</option>

        </Field>
        <RedErrorMessage name='country'/>
        <br></br>
        <label>Comments:</label>
        <Field as="textarea" name="comments"/>
        <RedErrorMessage name='comments'/>
        <br></br>
        <button type='submit'>Submit</button>
    </Form>

    </Formik>
    {/* <h1>{JSON.stringify(formData)}</h1>
       */}
    </div>
  )
}

export default FormikForm
