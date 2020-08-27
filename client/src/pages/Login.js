import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom'
import '../App.css';
import { AuthContext } from '../AuthContext'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Login from '../components/LoginForm'

function LoginForm(props) {

  const { isAuth } = useContext(AuthContext)

  console.log("login auth: ", isAuth)

  return (
      isAuth ? <Redirect to='/users/profile' />
        :
        <Container className="signup">
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <Login {...props}/>
            </Col>
          </Row>
        </Container>
  );
}

export default LoginForm;