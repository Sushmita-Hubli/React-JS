import * as Yup from 'yup';

export const FormSchema=Yup.object({
    name:Yup.string().min(3).max(20).required("Name is must"),
    email:Yup.string().email().required("email is must"),
    age:Yup.number().min(10).max(50).required("Age is must")
});