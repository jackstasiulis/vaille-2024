import './ItemImages.scss'

const ItemImages = () => {
    const imageUrls = [ 'https://placehold.co/750x900', 'https://placehold.co/750x900' ];

  return (
    <>
    <div className="item-images__container">
      <div className="item-images">
        {imageUrls.map((imageUrl, index) => (
          <img className='item-images__image' key={index} src={imageUrl} alt='product images' />
        ))}
      </div>
      <div className="item-images__info">
        <h1>Title title title</h1>
        <p>detsdfsdfsdfail</p>
        <p>detailsdsds</p>
        <p>detasdasdsdil</p>
      </div>
    </div>
    </>
  )
}

export default ItemImages
