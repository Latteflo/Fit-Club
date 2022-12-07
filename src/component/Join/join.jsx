import React, {useRef} from 'react';
import './join.css';
import emailjs from '@emailjs/browser';

export const Join = () => {
const form=useRef()

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail-sf', 'template_76dzu8g', 
    form.current, 'TLiQpez9SH3JdqU5d')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


    return (
    <div className='join' id='join-us'>
    <div className='left-j'>
        <hr />
        <div>
            <span className='stroke-text'>READY TO</span>
            <span>LEVEL UP</span>
        </div> 
        <div>
            <span>YOUR BODY</span>
            <span className='stroke-text'>WITH US?</span>
        </div> 
    </div>
    <div className='right-j'> </div>
<form ref={form} 
    className='email-container' 
    onSubmit={sendEmail}>
    <input type='email' 
    name='user_email' 
    placeholder='Enter Your Email Address' />
    <button className='btn btn-j'>Join Now</button>
</form>
    </div>
  )
}

export default Join