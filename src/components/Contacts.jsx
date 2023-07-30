
import { useState } from 'react'
import './Contact.css'
import Button from './Button'

const Contacts = () => {

  const [formData,setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const { name,email,message } = formData

  const handleChange = (e)=>{
    setFormData((prevState)=> ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div id='contacts' className='contact-container'>
      <div className='contact-section'>
        <form className='contact-form'>
          <div className='form-input-field'>
          <label htmlFor='name'>Name:</label>
          <input id='name' type='text' name='name' value={name} onChange={handleChange} />
          </div>
          <div className='form-input-field'>
          <label htmlFor='email'>Email:</label>
          <input id='email' type='text' name='email' value={email} onChange={handleChange} />
          </div>
          <div className='form-input-field form-textbox'>
          <label htmlFor='message'>Message:</label>
          <textarea id='message' type='text' name='message' value={message} onChange={handleChange} />
          </div>
          <div className='form-submit-field'>
          <Button>Submit</Button>
          </div>
        </form>
      </div>
      <div className='contact-img'>
        
      </div>
    </div>
  )
}

export default Contacts