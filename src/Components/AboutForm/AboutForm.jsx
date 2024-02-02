import './AboutForm.scss'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com';

const AboutForm = () => {

  function sendEmail(e) {
    e.preventDefault();  

    emailjs.sendForm('service_bypcokg', 'template_9w09jae', e.target, '996iLhn-7GkMbs3nv')
      .then((result) => {
        e.target.name.value = '';
        e.target.email.value = '';
        e.target.message.value = '';
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
      <div className='about-form__container'>
        <h2 className='about-form__title'>General Inquiry Form</h2>
          <form className='about-form' onSubmit={sendEmail}>
              <label>email</label>
              <input type="text" name='email' />

              <label>name</label>
              <input type="text" name='name' />

              <label>message</label>
              <input type="text" name='message' />

              <input type="submit" />
          </form>
      </div>


    </>
  )
}

export default AboutForm
