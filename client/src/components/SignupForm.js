import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap/';
import Axios from 'axios';
import User from "../pages/assets/user.css";
import Nav from "../components/Nav";

const Signup = props => {
  const emptyUser = { firstNameInput: '', lastNameInput: '', emailInput: '', passwordInput: '' }
  const errorMessage = 'Please Fill In All Sections'
  const [formData, setFormData] = useState(emptyUser)
  const [credsAreInvalid, setCredsAreInvalid] = useState('')
  const [firstNameColor, setFirstNameColor] = useState('')
  const [lastNameColor, setLastNameColor] = useState('')
  const [emailColor, setEmailColor] = useState('')
  const [passwordColor, setPasswordColor] = useState('')

  const handleInputChange = event => {
    event.preventDefault()
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value });
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    let newUser = {
      firstName: formData.firstNameInput,
      lastName: formData.lastNameInput,
      email: formData.emailInput,
      password: formData.passwordInput
    }
    if (validateUserInput(newUser)) {
      postNewUser(newUser)
      setFormData(emptyUser)
    } else {
      setCredsAreInvalid(errorMessage)
    }
  }

  const validateUserInput = ({ firstName, lastName, email, password }) => {
    let isValid = true;
    if (!firstName) {
      setFirstNameColor('text-danger')
      isValid = false;
    } else {
      setFirstNameColor('')
    }
    if (!lastName) {
      setLastNameColor('text-danger')
      isValid = false;
    } else {
      setLastNameColor('')
    }
    if (!email) {
      setEmailColor('text-danger')
      isValid = false;
    } else {
      setEmailColor('')
    }
    if (!password) {
      setPasswordColor('text-danger')
      isValid = false;
    } else {
      setPasswordColor('')
    }
    return isValid;
  }

  const postNewUser = newUser => {
    Axios.post('/api/auth/signup', newUser)
      .then(() => {
        props.history.push('/login')
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="inputFirstName">
          <Form.Label className={firstNameColor} className="loginInput" >First Name</Form.Label>
          <Form.Control name="firstNameInput" className="loginInput" type="text" placeholder="" value={formData.firstNameInput} onChange={handleInputChange} />
        </Form.Group>
        <Form.Group controlId="inputLastName">
          <Form.Label className={lastNameColor} className="loginInput">Last Name</Form.Label>
          <Form.Control name="lastNameInput" className="loginInput" type="text" placeholder="" value={formData.lastNameInput} onChange={handleInputChange} />
        </Form.Group>
        <Form.Group controlId="emailInput">
          <Form.Label className={emailColor} className="loginInput">Email Address</Form.Label>
          <Form.Control name="emailInput" className="loginInput" type="email" placeholder="Enter email" value={formData.emailInput} onChange={handleInputChange} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="inputPassword">
          <Form.Label className={passwordColor} className="loginInput">Password</Form.Label>
          <Form.Control name="passwordInput" className="loginInput" type="password" placeholder="Password" value={formData.passwordInput} onChange={handleInputChange} />
        </Form.Group>
        <Form.Group>
          <Form.Text className="text-danger">
            {credsAreInvalid}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" className="m-1">
          Sign Up
        </Button>
      </Form>
    </>
  )
}

export default Signup;
