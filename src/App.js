import React, {useState, useEffect} from 'react';
import './App.css';
import qBank from './quizService/index';

function App() {

    const [questionbank, setQuestionBack] = useState([]);
    useEffect( () => {
        qBank().then( response => {
           setQuestionBack(response);
        } )
    }
    , [] );


  return (
    <div className="App">
        <div className="title">Quiz bee</div>
        {
            questionbank.length > 0 && questionbank.map( ({answer, correct, question, questionId}) => (
                <h4 key={questionId}>{question}</h4>
            ) )
        }
    </div>
  );
}

export default App;
