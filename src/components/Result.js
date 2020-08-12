import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ responses, score, playAgainHandler }) => {
	return(
		<div className='score-board'>
			<div className='score'>
				{score} / {responses}
			</div>
			<button className='playBtn' onClick={playAgainHandler}>Play Again</button>
		</div>
	)
}

Result.propTypes = {
	responses: PropTypes.number.isRequired,
	score: PropTypes.number.isRequired,
	playAgainHandler: PropTypes.func.isRequired,
}

export default Result