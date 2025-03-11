import { useState } from 'react'
import { auth, db } from '../../firebase'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { Alert, Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'

const Signup = ({ formClass, toggle }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [showErrorAlert, setShowErrorAlert] = useState(false)
  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, 'Only letters are allowed (A-Z, a-z).')
      .required('Username is required.'),
    email: Yup.string().email('Must be a valid email (e.g., name@example.com).').required('Email is required.'),
    phoneNumber: Yup.string().matches(/^\(\d{3}\) \d{3}-\d{4}$/, 'Format: (XXX) XXX-XXXX.'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters.')
      .matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'At least 1 number, 1 uppercase, 1 special character.')
      .required('Password is required.'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match.')
      .required('Confirm password is required.'),
  })

  const handleFormSubmit = async (values) => {
    const { username, email, phoneNumber, password } = values
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      await sendEmailVerification(user)
      await setDoc(doc(db, 'users', user.uid), {
        username,
        email,
        phoneNumber,
        uid: user.uid,
        createdAt: new Date(),
        verified: false,
      })
      navigate('/')
    } catch (error) {
      setShowErrorAlert(true)
      console.error(error)
    }
  }

  return (
    <div className='form-wrapper'>
      <Formik
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
        initialValues={{
          username: '',
          email: '',
          phoneNumber: '',
          password: '',
          confirmPassword: '',
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, setFieldValue, values, touched, errors, isValid }) => {
          const handlePhoneNumberChange = (e) => {
            const { value } = e.target
            let numbers = value.replace(/\D/g, '') // Remove non-numeric characters
            if (numbers.length > 10) numbers = numbers.slice(0, 10) // Limit to 10 digits

            let formattedNumber = numbers
            if (numbers.length >= 4) formattedNumber = `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`
            if (numbers.length >= 7) formattedNumber = `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`

            setFieldValue('phoneNumber', formattedNumber)
          }

          return (
            <Form className={`form ${formClass}`} noValidate onSubmit={handleSubmit}>
              <h1 className='text-center'>CreatorsFIU</h1>
              <p className='text-center'>Sign up to join our marketplace & connect with creators.</p>
              <Alert variant='danger' show={showErrorAlert} onClose={() => setShowErrorAlert(false)} dismissible>
                Something went wrong. Please try again.
              </Alert>
              <Form.Group className='mb-3' controlId='username'>
                <Form.Label>
                  Username <span className='text-danger'>*</span>
                </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter your username'
                  required
                  name='username'
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.username && !errors.username}
                  isInvalid={touched.username && Boolean(errors.username)}
                />
                <Form.Control.Feedback type='invalid'>{errors.username}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className='mb-3' controlId='email'>
                <Form.Label>
                  Email <span className='text-danger'>*</span>
                </Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter your email'
                  required
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.email && !errors.email}
                  isInvalid={touched.email && Boolean(errors.email)}
                />
                <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className='mb-3' controlId='phoneNumber'>
                <Form.Label>Phone Number</Form.Label>
                <div className='d-flex'>
                  <Form.Select id='countryCode' className='w-25'>
                    <option value='+1'>+1</option>
                  </Form.Select>
                  <Form.Control
                    type='tel'
                    placeholder='(xxx) xxx-xxxx'
                    name='phoneNumber'
                    value={values.phoneNumber}
                    onChange={handlePhoneNumberChange}
                    onBlur={handleBlur}
                    isValid={touched.phoneNumber && !errors.phoneNumber}
                    isInvalid={touched.phoneNumber && Boolean(errors.phoneNumber)}
                  />
                </div>
                <Form.Control.Feedback type='invalid'>{errors.phoneNumber}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className='mb-3' controlId='password'>
                <Form.Label>
                  Password <span className='text-danger'>*</span>
                </Form.Label>
                <div className='password-container'>
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter your password'
                    className='password-input'
                    required
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.password && !errors.password}
                    isInvalid={touched.password && Boolean(errors.password)}
                  />
                  <button type='button' className='toggle-password' id='togglePassword' onClick={() => setShowPassword(!showPassword)}>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M12 5C7 5 2 9 2 12C2 15 7 19 12 19C17 19 22 15 22 12C22 9 17 5 12 5ZM12 17C9 17 6 14 6 12C6 10 9 7 12 7C15 7 18 10 18 12C18 14 15 17 12 17ZM12 9C10.5 9 9 10.5 9 12C9 13.5 10.5 15 12 15C13.5 15 15 13.5 15 12C15 10.5 13.5 9 12 9Z'
                        fill='gray'
                      />
                    </svg>
                  </button>
                  <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
                </div>
              </Form.Group>
              <Form.Group className='mb-3' controlId='confirmPassword'>
                <Form.Label>
                  Retype Password <span className='text-danger'>*</span>
                </Form.Label>
                <div className='password-container'>
                  <Form.Control
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder='Confirm password'
                    className='password-input'
                    required
                    name='confirmPassword'
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.confirmPassword && !errors.confirmPassword}
                    isInvalid={touched.confirmPassword && Boolean(errors.confirmPassword)}
                  />
                  <button
                    type='button'
                    className='toggle-password'
                    id='toggleConfirmPassword'
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M12 5C7 5 2 9 2 12C2 15 7 19 12 19C17 19 22 15 22 12C22 9 17 5 12 5ZM12 17C9 17 6 14 6 12C6 10 9 7 12 7C15 7 18 10 18 12C18 14 15 17 12 17ZM12 9C10.5 9 9 10.5 9 12C9 13.5 10.5 15 12 15C13.5 15 15 13.5 15 12C15 10.5 13.5 9 12 9Z'
                        fill='gray'
                      />
                    </svg>
                  </button>
                  <Form.Control.Feedback type='invalid'>{errors.confirmPassword}</Form.Control.Feedback>
                </div>
              </Form.Group>

              <Button variant='primary' id='SignupBtn' type='submit' className='w-100' disabled={!isValid}>
                Sign Up
              </Button>

              <p className='text-center mt-3'>
                <span>Already have an account? </span>
                <b className='text-primary' style={{ cursor: 'pointer' }} onClick={toggle}>
                  Sign in here
                </b>
              </p>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default Signup
