import AboutForm from '../../Components/AboutForm/AboutForm'
import FAQDropdown from '../../Components/FAQDropdown/FAQDropdown'
import './AboutPage.scss'

const AboutPage = () => {

  return (
    <>
        <div className='about-page'>

            <div className='about-page__header'>
                <h3 className='about-page__header--title'>...</h3>
                <p className='about-page__header--text'>Make cool shit.</p>
            </div>

            <div className='about-page__faq'>
                <img className='about-page__faq--image' src="https://imgur.com/UxNmAxc.jpg" alt="" />
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
