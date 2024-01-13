import './ItemCard.scss'

const ItemCard = () => {

  return (
    <>
        <article className='item-card'>
            <div className='item-card__image--container'>
                <img className='item-card__image' src="https://placehold.co/480x600" alt="product image" />
            </div>

            <div className='item-card__details'>
                <p>title title title</p>
                <p>price : $200</p>
            </div>


        </article>
    </>
  )
}

export default ItemCard
