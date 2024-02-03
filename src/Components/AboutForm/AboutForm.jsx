import './AboutForm.scss';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { useEffect, useState } from 'react';

const AboutForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const options = ['General', 'Item Specific', 'Order Status', 'Collab'];
  const [selectedSubject, setSelectedSubject] = useState(options[0]);

  const handleSubjectChange = (subject) => {
    setSelectedSubject(subject);
  }

  const sendEmail = (data, e) => {
    e.preventDefault();

    emailjs.sendForm('service_bypcokg', 'template_9w09jae', e.target, '996iLhn-7GkMbs3nv')
      .then((result) => {
        e.target.reset();
        setSelectedSubject(null);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className='about-form__container'>
      <h2 className='about-form__title'>General Inquiry Form</h2>
      <form className='about-form' onSubmit={handleSubmit(sendEmail)}>

        <div className='about-form__input--container'>
          <input className={`about-form__input ${errors.email ? 'error' : ''}`} placeholder='EMAIL' type="text" {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })} />
          {errors.email && <span className='about-form__input--errorAsterisk'>*</span>}
        </div>
        
        <div className='about-form__input--container'>
          <input className={`about-form__input ${errors.name ? 'error' : ''}`} placeholder='NAME' type="text" {...register("name", { required: true })} />
          {errors.name && <span className='about-form__input--errorAsterisk'>*</span>}
        </div>
        
        <div className='about-form__radio--container'>
          {options.map((subject) => (
            <label key={subject} className={`about-form__radio--label ${subject === selectedSubject ? 'about-form__radio--label__selected' : ''}`}>
              <input className='about-form__radio' type="radio" value={subject} checked={subject === selectedSubject} onChange={() => handleSubjectChange(subject)} name='emailSubject' />
              {subject}
            </label>
          ))}
        </div>
        
        <div className='about-form__input--container'>
          <textarea className={`about-form__textarea ${errors.message ? 'error' : ''}`} placeholder='MESSAGE' type="text" name='message' {...register("message", { required: true })} />
          {errors.message && <span className='about-form__input--errorAsterisk'>*</span>}
          </div>
        <input className='about-form__submit' type="submit" />
      </form>
    </div>
  );
}

export default AboutForm;