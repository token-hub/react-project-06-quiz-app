import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Questions = ({ question, answers, correct, computeScore }) => {
	
	const [options, setOptions] = useState(answers); // []

	const clickHandler = e => {
		setOptions([e.target.innerHTML]);
		computeScore(correct, e.target.innerHTML);
	}

	return(
		<div>
			{
				<div className='questionBox'>
			    	<div className="question">{question}</div>
			    		{
			    			options.map(ans => (
			    				<button key={ans} onClick={clickHandler} className='answerBtn'>{ans}</button>
			    			))
			    		}
			    		<p>{correct}</p>
			    </div>
			}
		</div>
	)
}

Questions.propTypes = {
	question: PropTypes.string.isRequired,
	answers: PropTypes.array.isRequired,
	correct: PropTypes.string.isRequired,
	computeScore: PropTypes.func.isRequired,
}

export default Questions