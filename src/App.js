import './App.css';
import Faqs from './components/Faqs';
import {useState} from 'react'

function App() {

  const [faqs, setFaqs] = useState([
    {
      faqHeader: 'Question 1',
      faqBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolore animi saepe, vitae, obcaecati accusamus autem officiis distinctio cumque culpa eius est cum? Magni omnis iste hic at ducimus natus!',
      faqFooter: 'https://www.youtube.com'
    },
    {
      faqHeader: 'Question 2',
      faqBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolore animi saepe, vitae, obcaecati accusamus autem officiis distinctio cumque culpa eius est cum? Magni omnis iste hic at ducimus natus!',
      faqFooter: 'https://www.youtube.com'
    },
    {
      faqHeader: 'Question 3',
      faqBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolore animi saepe, vitae, obcaecati accusamus autem officiis distinctio cumque culpa eius est cum? Magni omnis iste hic at ducimus natus!',
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
