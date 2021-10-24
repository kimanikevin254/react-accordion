import './App.css';
import Faqs from './components/Faqs';
import {useState} from 'react'

function App() {

  const [faqs, setFaqs] = useState([
    {
      faqHeader: 'Question 1',
      faqBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ipsa!',
      faqFooter: 'https://www.youtube.com'
    },
    {
      faqHeader: 'Question 2',
      faqBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ipsa!',
      faqFooter: 'https://www.youtube.com'
    },
    {
      faqHeader: 'Question 3',
      faqBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ipsa!',
      faqFooter: 'https://www.youtube.com'
    }    
  ]) 
  return (
    <div className="App">
      <Faqs faqs={faqs} />
    </div>
  );
}

export default App;
