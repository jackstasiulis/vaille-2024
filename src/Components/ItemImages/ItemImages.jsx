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
                    <ItemDetails title={item.title} description={item.description} />
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
