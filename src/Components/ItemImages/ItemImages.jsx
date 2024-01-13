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
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
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
