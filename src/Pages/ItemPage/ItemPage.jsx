import './ItemPage.scss'
import ItemContent from '../../Components/ItemContent/ItemContent'
import productDetails from '../../assets/Data/product-details.json';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'

const ItemPage = () => {

  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    try {
      const selectedItem = productDetails.find((item) => item.id === Number(itemId));

      if (selectedItem) {
        setItem(selectedItem);
      } else {
        console.error('Item not found');
      }
    } catch (error) {
      console.error('Error fetching item details:', error);
    }
    
    window.scrollTo(0, 0);

  }, [itemId]);

  return (
    <>
      <div className='item-page'>

        <ItemContent item={item} />

      </div>
    </>
  )
}

export default ItemPage
