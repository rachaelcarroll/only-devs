import React from 'react';
import Card from './Card';

const QuestionBoard = ({questions}) => {

    const questionCard = questions.map(question => {
        return (
            <Card 
                id={question.id}
                key={question.id}
                question={question.question}
                answers={question.answers}
            />
        )
    });
    
    return (
        <section className='cardsContainer'>{questionCard}</section>
    )
}

export default QuestionBoard;

