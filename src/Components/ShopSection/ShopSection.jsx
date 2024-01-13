import ItemCard from '../ItemCard/ItemCard'
import './ShopSection.scss'
import itemData from '../../assets/Data/product-details.json'

const ShopSection = () => {

  return (
    <>
        <section className='shop-section'>
            <h1 className='shop-section__title'>SHOP</h1>

            <div className='shop-section__cards--container'>
                <div className='shop-section__cards'>

                    {itemData.map(item => {
                      return(
                        <ItemCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image1={item.image1}
                        image2={item.image2}
                        image3={item.image3}
                        image4={item.image4}
                        />
                          
                      )
                    })}

                </div>
            </div>


        </section>
        
    </>
  )
}

export default ShopSection