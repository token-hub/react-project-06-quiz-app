import React, {useState, useEffect} from 'react';
import './App.css';
import qBank from './quizService/index';
import Questions from './components/Questions';
import Result from './components/Result';

function App() {

    const [questionbank, setQuestionBack] = useState([]);

    const [score, setScore] = useState(0);
    const [responses, setResponses] = useState(0);

   
    const computeScore = (correct, answer) => {
        if (correct === answer) {
            setScore(prev => prev + 1);
        }
        setResponses(prev => prev + 1);
    }

    const playAgainHandler = () => {
        setResponses(0);
        setScore(0);
    }

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
            responses < 5 &&
                questionbank.length > 0 && questionbank.map( ({answers, correct, question, questionId}) => (
                    <Questions 
                        key={questionId}
                        correct={correct}
                        question={question}
                        answers={answers}
                        computeScore={computeScore}
                    />
                ) )
        }
        {
            responses == 5 && <Result responses={responses} score={score} playAgainHandler={playAgainHandler} />
        }
    </div>
  );
}

export default App;




/*
create a state
pass the state to the child component
update the state on the map function call
onClick of the button update the state again

 */



