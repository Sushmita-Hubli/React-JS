import React from 'react'
import {Button, Card, Col, Container,Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const CardBS = () => {
  return (
    <div>
      <Container>
      <Row>
      <Col md={4}>
      <Card bg='warning' border='primary'>
      <Card.Header>This is Card Header</Card.Header>
        <Card.Img src='images/image2.png'/>

        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle>Card SubTitle</Card.Subtitle>
            <Card.Text>This is A card text. hhhhhhkhihihdihfihknkdhcdsiuyioewwemdv;lsal;kolsiosyn</Card.Text>
           <div className='d-grid'>
                <Button variant='danger'>Read More</Button>
       
            </div>    </Card.Body>
            <Card.Footer>This is Card Footer</Card.Footer>
      </Card>

      </Col>

      <Col md={4}>
      <Card>
        <Card.Img src='images/image2.png'/>

        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle>Card SubTitle</Card.Subtitle>
            <Card.Text>This is A card text. hhhhhhkhihihdihfihknkdhcdsiuyioewwemdv;lsal;kolsiosyn</Card.Text>
           <div className='d-grid'>
                <Button variant='danger'>Read More</Button>
       
            </div>  
            </Card.Body>
      </Card>

      </Col>

      <Col md={4}>
      <Card>
        <Card.Img src='images/router.png'/>

        <Card.ImgOverlay>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle>Card SubTitle</Card.Subtitle>
            <Card.Text>This is A card text. hhhhhhkhihihdihfihknkdhcdsiuyioewwemdv;lsal;kolsiosyn</Card.Text>
            <Card.Link href='#'>Click here...</Card.Link>
            <div className='d-grid'>
                <Button variant='danger'>Read More</Button>
       
            </div>
             </Card.ImgOverlay>
      </Card>

      </Col>

      

      </Row>

      </Container>
    </div>
  )
}

export default CardBS
