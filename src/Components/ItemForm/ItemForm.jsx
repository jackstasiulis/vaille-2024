import './ItemForm.scss'
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const ItemForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendEmail = ( e) => {
    e.preventDefault();

    emailjs.sendForm('service_ssp8j68', 'template_9w09jae', e.target, '996iLhn-7GkMbs3nv')
      .then(() => {
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
    <section className="item-form">

      <h2>Item Form</h2>
      <p>To purchase | complete the form below</p>
      <form className='item-form' onSubmit={handleSubmit(sendEmail)}>

        <div className='item-form__input--container'>
          <input className={`item-form__input ${errors.name ? 'error' : ''}`} placeholder='NAME' type="text" {...register("name", { required: true })} />
          {errors.name && <span className='item-form__input--errorAsterisk'>*</span>}
        </div>
        
        <div className='item-form__input--container'>
          <input className={`item-form__input ${errors.email ? 'error' : ''}`} placeholder='EMAIL' type="text" {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })} />
          {errors.email && <span className='item-form__input--errorAsterisk'>*</span>}
        </div>

        <input type="hidden" name="emailSubject" value="PURCHASE" />

        <div className='item-form__input--container'>
          <textarea className={`item-form__textarea ${errors.message ? 'error' : ''}`} placeholder='NOTES' type="text" name='message' {...register("message", { required: false })} />
          </div>
        <input className='item-form__submit' type="submit" />
      </form>

    </section>
    </>
  )
}

export default ItemForm