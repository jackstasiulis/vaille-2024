import './ItemCard.scss'

const ItemCard = () => {

  return (
    <>
    <a href="/item">
        <article className='item-card'>
            <div className='item-card__image--wrapper'>
                <img className='item-card__image' src="https://placehold.co/480x600" alt="product image" />
            </div>

            <div className='item-card__details'>
                <p className='item-card__details--text'>title title title</p>
                <p className='item-card__details--text'>$200</p>
            </div>


        </article>
    </a>
 
    </>
  )
}

export default ItemCard
