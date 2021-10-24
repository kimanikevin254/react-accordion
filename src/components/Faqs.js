import React, {useState} from 'react'
import { AiFillCaretDown } from 'react-icons/ai'

function Faqs({ faqs }) {

    const [open, setIsOpen] = useState(false)

    const toggler = (index) => {
        open === false ? setIsOpen(true) : setIsOpen(false)
        console.log(index)
    }
    return (
        <div className='faq'>
        <h2>FAQs</h2>
        {faqs.map((faq, index) => (
            <div key={index} className='i-faq'>
                <div className='faq-header'>
                    {faq.faqHeader}
                    <AiFillCaretDown style={{cursor: 'pointer'}} onClick={() => {toggler(index)}} />
                </div>

                <div className={open === false ? 'hide' : 'show'}>
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
