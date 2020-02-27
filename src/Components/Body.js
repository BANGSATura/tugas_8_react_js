import React, { Component } from 'react';
import PopUp from './modalButton.js';
import { Container, Row, Col, Breadcrumb, Carousel, ListGroup, Jumbotron, Button, Image, Form } from 'react-bootstrap';

class Body extends Component {
  render() {
    return(
      <Container fluid>
        <Row>
          <Col></Col>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                  Berita
                </Breadcrumb.Item>
              <Breadcrumb.Item active>Bola</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={8}>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100"
                alt="First slide"
                height={400}
                width={500}
                src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"/>
                <Carousel.Caption>
                  <h3 style={{textTransform:'capitalize', color:'#2c3e50'}}>neymar bahas kontrak ?</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100"
                alt="Second slide"
                height={400}
                width={400}
                src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"/>
                <Carousel.Caption>
                  <h3 style={{textTransform:'capitalize'}}>Inggris akan menjadi tim terbaik dunia</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100"
                alt="Second slide"
                height={400}
                width={400}
                src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"/>
                <Carousel.Caption>
                  <h3 style={{textTransform:'capitalize'}}>sani rizki fauzi tegaskan mental pemain timnas tetap bagus</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col></Col>
        </Row>
        <br/>
        <Row>
          <Col xs={3}>
            <ListGroup>
              <ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
              <ListGroup.Item>Liga Primer Inggris</ListGroup.Item>
              <ListGroup.Item>Divisi Primer</ListGroup.Item>
              <ListGroup.Item>Serie A</ListGroup.Item>
              <ListGroup.Item>Ligue 1</ListGroup.Item>
              <ListGroup.Item>Bundes Liga</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={5}>
            <Jumbotron>
              <h1>Divisi Primera</h1>
              <p>Bermain untuk Catalunya, Gerard Pique minta dihormati</p>
              <Button variant="primary">Read More!</Button>
            </Jumbotron>
          </Col>
          <Col xs={4}>
            <center>
              <Image src='https://png.pngtree.com/svg/20161113/ef1b24279e.png' width={80} height={80} rounded/>
              <h3>Silahkan Login</h3>
            </center>
            <Form>
              <Form.Group>
                <Form.Control type='email' placeholder='Masukkan Email'/>
              </Form.Group>
              <Form.Group>
                <Form.Control type='password' placeholder='Masukkan Password'/>
              </Form.Group>
              <Form.Group>
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Form.Group>
                <PopUp/>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Body;
