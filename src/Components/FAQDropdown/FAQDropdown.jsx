import { useState } from 'react';
import './FAQDropdown.scss'

const FAQDropdown = () => {
    const faqData = [
        { question: 'How do I order from Vaille?', answer: 'To order, select your desired item from the shop page and follow the directions of the page.'},
        { question: 'Question 1', answer: 'Answer 1'},
        { question: 'Question 1', answer: 'Answer 1'},
        { question: 'Question 1', answer: 'Answer 1'},
        { question: 'Question 1', answer: 'Answer 1'}
    ];

    // Sets wHich question is open
    const [openQuestion, setopenQuestion] = useState(null);

    const faqToggle = (index) => {
        setopenQuestion(openQuestion === index ? null : index)
    }

  return (
    <>
        <div className='faq-dropdown'>
            <h2 className='faq-dropdown__title'>F.A.Q.</h2>
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
        </div>
    </>
  )
}

export default FAQDropdown
