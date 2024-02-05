import './ItemContent.scss'
import ItemDetails from '../ItemDetails/ItemDetails';
import ItemForm from '../ItemForm/ItemForm';


const ItemContent = ({item}) => {
    const imageUrls = item ? [item.image1, item.image2] : [];

  return (
    <>
    <div className="item-content__container">
        <div className="item-content">
            {imageUrls.map((imageUrl, index) => (
                <img className='item-content__image' key={index} src={imageUrl} alt='product images' />
            ))}
        </div>

        <div className="item-content__info">
        {/* check if item exists before rendering text */}
            {item ? (
                <>
                    <ItemDetails 
                    availability={item.availability}
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
            {item && item.availability === 'yes' && <ItemForm title={item.title} price={item.price}/>}

        </div>
    </div>
    </>
  )
}

export default ItemContent