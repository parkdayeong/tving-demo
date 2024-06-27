import React from 'react';
import { Outlet } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './AppLayout.style.css';

const AppLayout = () => {
  return (
    <div>
      <Navbar expand='lg' variant='dark'>
        <Container fluid>
          <Navbar.Brand href='/'>
            <img
              style={{ width: '150px' }}
              src='https://image.tving.com/ntgs/operation/logo/2023/09/18/1695032536_1.svg'
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link className='nav-text' href='/'>
                HOME
              </Nav.Link>
              <Nav.Link className='nav-text' href='/movies'>
                영화
              </Nav.Link>
              <Nav.Link className='nav-text' href='/tvprograms'>
                TV 프로그램
              </Nav.Link>
            </Nav>
            <Form className='d-flex'>
              <Form.Control
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
              <Button variant='danger'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
