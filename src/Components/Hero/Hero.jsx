import './Hero.scss'
import heroImage from '../../assets/Images/heroCar3.png'

const Hero = () => {

  return (
    <>
        <section className='hero'>
            <div className='hero__image--container'>
              <div className='hero__image--text__container'>
                {/* <h1 className='hero__image--text'>vaille</h1> */}
              </div>
                <img className='hero__image' src={heroImage} alt="main page hero image" />
            </div>

        </section>
    </>
  )
}

export default Hero
