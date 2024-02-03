import ItemDetails from '../ItemDetails/ItemDetails';
import './ItemImages.scss'

const ItemImages = ({item}) => {
    const imageUrls = item ? [item.image1, item.image2] : [];

  return (
    <>
    <div className="item-images__container">

        <div className="item-images">
            {imageUrls.map((imageUrl, index) => (
                <img className='item-images__image' key={index} src={imageUrl} alt='product images' />
            ))}
        </div>

        <div className="item-images__info">
        {/* check if item exists before rendering text */}
            {item ? (
                <>
                    <ItemDetails 
                    title={item.title} 
                    description={item.description}
                    feature1={item.feature1}
                    feature2={item.feature2}
                    feature3={item.feature3}
                    material={item.material}
                    color={item.color}
                    fit1={item.fit1}
                    fit2={item.fit2}

                    />
                </>
                ) : (
                    <p>Loading...</p>
            )}
        </div>

    </div>
    </>
  )
}

export default ItemImages