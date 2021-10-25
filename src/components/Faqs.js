import React, {useState} from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'

function Faqs({ faqs }) {

    const [selected, setSelected] = useState()

    const toggler = (index) => {
        index !== selected ? setSelected(index) : setSelected(null)
    }
    return (
        <div className='faq'>
        <h2>FAQs</h2>
        {faqs.map((faq, index) => (
            <div key={index} className='i-faq'>
                <div className='faq-header' onClick={() => toggler(index)}>
                    {faq.faqHeader}

                    {
                        selected === index ? (<AiFillCaretUp />) : (<AiFillCaretDown />) 
                    }

                </div>

                <div className={selected === index ? 'show' : 'hide'}>
                    <div className="faq-body">
                        {faq.faqBody}
                    </div>  

                    <div className="faq-footer">
                        <a href={faq.faqFooter}>Link to ref</a>
                    </div>
                </div>
                <hr />
            </div>
            ))
        }       
        </div>
    )
}

export default Faqs
