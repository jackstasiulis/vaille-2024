import './ItemCard.scss'
import { Link } from 'react-router-dom';

const ItemCard = ({id, title, price, image1, image2, image3, image4}) => {

  return (
    <>
      <Link to={`/item/${id}`}>
        <article className='item-card'>
                <div className='item-card__image--wrapper'>
                    <img className='item-card__image' src={image1} alt="product image" />
                </div>

                <div className='item-card__details'>
                    <p className='item-card__details--text'>{title}</p>
                    <p className='item-card__details--text'>$ {price}</p>
                </div>


            </article>
      </Link>
        
 
    </>
  )
}

export default ItemCard
