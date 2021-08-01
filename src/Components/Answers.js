import React from 'react';
import { parseDate } from  '../Utilities/util';
import PropTypes from 'prop-types';
  
 export const Answers = ({answers, rateAnswer}) => {
    return answers.map(singleAnswer => {
        const {id, question_id, answer, rating, answer_time} = singleAnswer
        const date = parseDate(answer_time)
        const upvote = [question_id, id, 'upvote']
        const downvote = [question_id, id, 'downvote']

        return (
            <article className='answer' key={id} id={id}>
                <header className='answer-header'>
                    <p className="time">Submission date: {date}</p>
                    <button className='like-btn' onClick={() => (rateAnswer(upvote))}>{rating} likes</button>
                </header>
                <p className="answer-block">{answer}</p>
            </article>
        )     
    })
}

Answers.propTypes = {
    answers: PropTypes.array,
    vote: PropTypes.string
}
