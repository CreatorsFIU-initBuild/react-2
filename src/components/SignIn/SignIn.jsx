import { useState } from 'react'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { Alert, Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'

const SignIn = ({ formClass, toggle }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showErrorAlert, setShowErrorAlert] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email (e.g., name@example.com).').required('Email is required.'),
    password: Yup.string().required('Password is required.'),
  })

  const handleFormSubmit = async (values) => {
    const { email, password } = values
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/') // Redirect after successful login
    } catch (error) {
      setErrorMessage('Invalid email or password. Please try again.')
      setShowErrorAlert(true)
    }
  }

  const handleForgotPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email)
      setErrorMessage('Password reset email sent! Check your inbox.')
      setShowErrorAlert(true)
      setShowForgotPassword(false) // Close the forgot password prompt
    } catch (error) {
      setErrorMessage('Error sending reset email. Please try again later.')
      setShowErrorAlert(true)
    }
  }

  return (
    <div className='form-wrapper'>
      <Formik
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
        initialValues={{
          email: '',
          password: '',
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, values, touched, errors, isValid }) => (
          <Form className={`form ${formClass}`} noValidate onSubmit={handleSubmit}>
            <h1 className='text-center'>CreatorsFIU</h1>
            <p className='text-center'>Sign in to our marketplace & connect with creators.</p>

            {showErrorAlert && (
              <Alert variant='danger' onClose={() => setShowErrorAlert(false)} dismissible>
                {errorMessage}
              </Alert>
            )}

            {/* Email Field */}
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

            {/* Password Field */}
            <Form.Group className='mb-3' controlId='password'>
              <Form.Label>
                Password <span className='text-danger'>*</span>
              </Form.Label>
              <div className='password-container'>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Enter your password'
                  required
                  name='password'
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.password && !errors.password}
                  isInvalid={touched.password && Boolean(errors.password)}
                />
                <button type='button' className='toggle-password' onClick={() => setShowPassword(!showPassword)}>
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

            {/* Forgot Password Link */}
            <div className='text-center mb-3'>
              <Button variant='link' className='forgot-password-btn' onClick={() => setShowForgotPassword(true)}>
                Forgot Password?
              </Button>
            </div>

            {/* Forgot Password Form */}
            {showForgotPassword && (
              <Form.Group className='mb-3'>
                <Form.Label>Enter your email to receive a password reset link</Form.Label>
                <Form.Control type='email' placeholder='Enter your email' onChange={handleChange} onBlur={handleBlur} value={values.email} />
                <Button variant='primary' onClick={() => handleForgotPassword(values.email)}>
                  Send Reset Link
                </Button>
              </Form.Group>
            )}

            {/* Sign In Button */}
            {!showForgotPassword && (
              <Button variant='primary' type='submit' className='w-100' disabled={!isValid}>
                Sign In
              </Button>
            )}

            {/* Sign Up Redirect */}
            <p className='text-center mt-3'>
              <span>Don't have an account? </span>
              <b className='text-primary' style={{ cursor: 'pointer' }} onClick={toggle}>
                Sign Up here
              </b>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default SignIn
