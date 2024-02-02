import './AboutForm.scss'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com';
import { useEffect, useState } from 'react';

const AboutForm = () => {

  
  const options = ['General', 'Item Specific', 'Order Status', 'Collab']
  
  const [selectedSubject, setSelectedSubject] = useState();
  
  const handleSubjectChange = (subject) => {
    setSelectedSubject(subject);
  }
  
  
  
  
  
  const sendEmail = (e) => {
    e.preventDefault();  

    emailjs.sendForm('service_bypcokg', 'template_9w09jae', e.target, '996iLhn-7GkMbs3nv')
      .then((result) => {
        e.target.name.value = '';
        e.target.email.value = '';
        e.target.message.value = '';
        e.target.emailSubject.value = ''
      }, (error) => {
          console.log(error.text);
      });
  }


  // useEffect(() => {
  //   console.log(selectedSubject)
  // })

  return (
    <>
      <div className='about-form__container'>
        <h2 className='about-form__title'>General Inquiry Form</h2>
          <form className='about-form' onSubmit={sendEmail}>
              <label>email</label>
              <input type="text" name='email' />

              <label>name</label>
              <input type="text" name='name' />
              
              <div className='about-form__radio--container'>
                {options.map((subject) => (
                  <label 
                  key={subject} 
                  className= {`about-form__radio--label ${subject === selectedSubject ? 'about-form__radio--label__selected' : '' } `}>
                      <input 
                      className='about-form__radio'
                      type="radio"
                      value={subject}
                      checked={subject === selectedSubject}
                      onChange={ () => handleSubjectChange(subject)}
                      name='emailSubject'
                      />
                      {subject}
                  </label>
                ))}
               
              </div>


              



              <label>message</label>
              <input type="text" name='message' />

              <input type="submit" />
          </form>
      </div>


    </>
  )
}

export default AboutForm
