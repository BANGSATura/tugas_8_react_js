import React, { Component } from 'react';
import { Container, Row, Col, DropdownButton, Dropdown, Figure } from 'react-bootstrap';
class Header extends Component {
  render() {
    return (
      <Container fluid>
        <Row style={{backgroundColor:"#2d3436"}}>
          <Col>
            <DropdownButton title="Pilih Bahasa">
              <Dropdown.Item>Indonesia</Dropdown.Item>
              <Dropdown.Item>Inggris</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col style={{
            display: "flex",
            justifyContent: "flex-end"
          }}>
            <Figure>
              <center>
                <Figure.Image src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" rounded width={60} height={60}/>
                <Figure.Caption>
                  Peter Kranz
                </Figure.Caption>
              </center>
            </Figure>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Header;
