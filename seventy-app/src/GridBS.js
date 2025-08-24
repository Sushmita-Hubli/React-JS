import React from 'react'
import {Container, Col,Row,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
const GridBS = () => {
  return (
    <div>
      {/* <Button  variant='outline-danger'>Submit</Button>
       */}

       <Container fluid='md'>
        <Row>
            <Col md={{offset:2, span:6}}>
                <div className='bg-primary p-4'>
                    MY DIV
                </div>
            </Col>
            <Col>
                <div className='bg-danger p-4'>
                    MY DIV
                </div>
            </Col>
            <Col>
                <div className='bg-success p-4'>
                    MY DIV
                </div>
            </Col>
        </Row>
        
         <Row className='mt-2'>
            <Col md={8} sm={6}>
                <div className='bg-primary p-4'>
                    MY DIV
                </div>
            </Col>
            <Col>
                <div className='bg-danger p-4'>
                    MY DIV
                </div>
            </Col>
            <Col>
                <div className='bg-success p-4'>
                    MY DIV
                </div>
            </Col>
             <Col>
                <div className='bg-secondary p-4'>
                    MY DIV
                </div>
            </Col>
        </Row>
       </Container>
    </div>
  )
}

export default GridBS
