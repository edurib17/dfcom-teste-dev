import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';


//Action
import { logout } from '../actions/UserAction';

//Routes
import { useDispatch, useSelector } from 'react-redux'




const Header = () => {
      //Consts
      const dispatch = useDispatch()
      const userLogin = useSelector(state => state.userLogin)
      const { userInfo } = userLogin
  
      // logout 
      const logoutHandler = () => {
          dispatch(logout())
      }
  
  return (
    <header>
      <Navbar bg="success" variant='dark' collapseOnSelect>
        <Container className="p-2 just"  >
        <LinkContainer to="/">
          <Navbar.Brand>Favorite Products</Navbar.Brand>
          </LinkContainer >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {userInfo ? (
                <NavDropdown style={{ marginLeft: 800 }} title="Perfil" id='username'>
                  <LinkContainer to='/favorites'>
                    <NavDropdown.Item>Favoritos</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler} >Sair</NavDropdown.Item>
                </NavDropdown>
              )
                : (<LinkContainer style={{ marginLeft: 800 }} to="/login">
                  <Nav.Link><i class="fas fa-sign-in-alt"></i> Entrar</Nav.Link>
                </LinkContainer>
                )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header