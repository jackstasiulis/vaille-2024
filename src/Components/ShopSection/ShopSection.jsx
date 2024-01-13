import ItemCard from '../ItemCard/ItemCard'
import './ShopSection.scss'

const ShopSection = () => {

  return (
    <>
        <section className='shop-section'>
            <h1 className='shop-section__title'>SHOP</h1>

            <div className='shop-section__cards--container'>
                <div className='shop-section__cards'>
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                </div>
            </div>


        </section>
        
    </>
  )
}

export default ShopSection
