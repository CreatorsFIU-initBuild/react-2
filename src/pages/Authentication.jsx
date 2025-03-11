import { useEffect, useRef } from 'react'
import Signup from '../components/Signup/Signup'
import './authentication.css'
import SignIn from '../components/SignIn/SignIn'

const Authentication = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.classList.add('sign-in')
      }
    }, 200)

    return () => clearTimeout(timeout)
  }, [])

  const toggle = () => {
    containerRef.current.classList.toggle('sign-in')
    containerRef.current.classList.toggle('sign-up')
  }

  return (
    <div className='_container' ref={containerRef}>
      <div className='_row'>
        <div className='_col _align-items-center flex-column sign-up'>
          <Signup formClass='sign-up' toggle={toggle} />
        </div>

        <div className='_col _align-items-center flex-column sign-in'>
          <SignIn formClass='sign-in' toggle={toggle} />
        </div>
      </div>
      <div className='_row content-row'>
        <div className='_col _align-items-center flex-column'>
          <div className='text sign-in'>
            <h2>Welcome</h2>
          </div>
        </div>
        <div className='_col _align-items-center flex-column'>
          <div className='text sign-up'>
            <h2>Join with us</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Authentication
