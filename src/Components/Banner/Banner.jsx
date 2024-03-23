import './Banner.scss'
import bannerImage from '../../assets/Images/ferrySeats.png'

const Banner = () => {

  return (
    <>
        <section className='banner'>
            <div className='banner__image--wrapper'>
                <img className='banner__image' src={bannerImage} alt="" />
            </div>

            

        </section>
    </>
  )
}

export default Banner
