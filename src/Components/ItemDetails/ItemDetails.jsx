import './ItemDetails.scss'

const ItemDetails = ({availability, title, description, feature1, feature2, feature3, material, color, fit1, fit2}) => {
   
    
  return (
    <>
        <div className='item-details'>
          <div className='item-details__title--wrapper'>
            <h1 className='item-details__title'>{title}</h1>
            {availability === 'no' ? <p className='item-details__availability'>SOLD</p> : null}
          </div>
            
            <p className='item-details__color'>{color}</p>
            <p className='item-details__desc'>{description}</p>
            <ul className='item-details__details'>
                <p className='item-details__details--title'>Details</p>
                <li className='item-details__details--feature'>{`- ${feature1}`}</li>
                <li className='item-details__details--feature'>{`- ${feature2}`}</li>
                <li className='item-details__details--feature'>{`- ${feature3}`}</li>
                <li className='item-details__details--feature'>{`- ${material}`}</li>
            </ul>
            <p className='item-details__fit--title'>Fit</p>
            <p>{`- ${fit1}`}</p>
            <p>{`- ${fit2}`}</p>
        </div>
    </>
  )
}

export default ItemDetails

// "feature1":"Satin lined",
// "feature2":"Imperfect",
// "feature3":"Water-resistant",
// "material":"13oz waxed canvas",
// "color":"Emerald",