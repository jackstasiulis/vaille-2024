import AboutForm from '../../Components/AboutForm/AboutForm'
import FAQDropdown from '../../Components/FAQDropdown/FAQDropdown'
import './AboutPage.scss'

const AboutPage = () => {

  return (
    <>
        <div className='about-page'>

            <div className='about-page__header'>
                <h1 className='about-page__header--title'>Whats Vaille</h1>
                <p className='about-page__header--text'>We are a creative brand and community. We make clothing, other items, furniture and design alot of cool shit.</p>
            </div>

            <div className='about-page__faq'>
                <img className='about-page__faq--image' src="https://placehold.co/750x750" alt="" />
                <FAQDropdown />
            </div>

            <div className='about-page__form'>
              <AboutForm />
            </div>


        </div>
    </>
  )
}

export default AboutPage
