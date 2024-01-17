import FAQDropdown from '../../Components/FAQDropdown/FAQDropdown'
import './AboutPage.scss'

const AboutPage = () => {

  return (
    <>
        <div className='about-page'>

            <div className='about-page__header'>
                <h1 className='about-page__header--title'>whats vaille</h1>
                <p className='about-page__header--text'>we are a creat ive brand and communtitey. we make clothes and furniture and design alot of cool shit.</p>
            </div>

            <div className='about-page__faq'>
                <img className='about-page__faq--image' src="https://placehold.co/750x750" alt="" />
                <FAQDropdown />
            </div>

        </div>
    </>
  )
}

export default AboutPage
