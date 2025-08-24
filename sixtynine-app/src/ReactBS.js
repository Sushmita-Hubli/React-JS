import React,{useState} from 'react'
import {Alert, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const ReactBS = () => {
    const [show,setShow]= useState(true);
  if(show)
  {
    return (
    <div>
    
    <Button variant='danger' href='https://www.google.com' size='lg' active>Submit</Button>
     <Button variant='danger' disabled>Submit</Button>
    <Button variant='danger' size='sm'>Submit</Button>
   <Alert variant='danger' onClose={()=>setShow(false)} dismissible>
   <Alert.Heading>Heading</Alert.Heading>
    <p>Hello Sushmita</p>
    <Alert.Link variant='danger' href='#'>
   Click to open this Link

   </Alert.Link>
   </Alert>
   
    {/* <Button variant='warning'>Submit</Button>
       <Button variant='success'>Submit</Button>
    <Button variant='dark'>Submit</Button>
    */}
    </div>
  )
  }
}

export default ReactBS
