import { useState } from 'react';
import './FAQDropdown.scss'

const FAQDropdown = () => {
    const faqData = [
        { question: 'How do I order from Vaille?', answer: 'To order, select your desired item from the shop page and follow the directions of the page.'},
        { question: 'How and where are our garments made?', answer: 'All garments are handmade in Toronto, ON.'},
        { question: 'Where does Vaille ship?', answer: 'We will try to ship anywhere in the world. Costs may incur on locations distant from Toronto, ON.'},
        { question: 'How do I commisson a custom garment?', answer: 'Fill out the below form on the about page to get in contact with the design team. '},
        { question: 'My question is not on this list.', answer: 'Hit us up below my friend.'}
    ];

    // Sets wHich question is open
    const [openQuestion, setopenQuestion] = useState(null);

    const faqToggle = (index) => {
        setopenQuestion(openQuestion === index ? null : index)
    }

  return (
    <>
        <section className='faq-dropdown'>
            <h2 className='faq-dropdown__title'>FAQ</h2>
            {faqData.map((item, index) => (

                <div key={index} className={`faq-dropdown__item ${openQuestion === index ? 'open' : ''}`}>

                    <div className="faq-dropdown__question" onClick={() => faqToggle(index)}>
                        {item.question}
                        <div className='faq-dropdown__arrow'>▷</div>
                        {/* other arrow option: ▶ */}
                    </div>

                    {openQuestion === index && (

                    <div className="faq-dropdown__answer">
                        {item.answer}
                    </div>

                    )}
                </div>
            ))}
        </section>
    </>
  )
}

export default FAQDropdown
