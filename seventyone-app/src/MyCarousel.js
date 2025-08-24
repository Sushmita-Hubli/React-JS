import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const MyCarousel = () => {
  return (
    <>
        <Container fluid>
            <Row>
                <Col>
                    <Carousel    >
                        <Carousel.Item interval={1000}>
                            <img src='images/router.png' width='1078' height='350' className='d-block w-100'></img>
                            <Carousel.Caption>
                                <h3>First Image</h3>
                                <p>Description</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                         <Carousel.Item interval={1000}>
                            <img src='images/image2.png' width='1078' height='350' className='d-block w-100'></img>
                            <Carousel.Caption>
                                <h3>Second Image</h3>
                                  <p>Description</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                         <Carousel.Item interval={3000}>
                            <img src='images/topics.png' width='1078' height='350' className='d-block w-100'></img>
                            <Carousel.Caption>
                                <h3>Third Image</h3>
                                  <p>Description</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default MyCarousel
