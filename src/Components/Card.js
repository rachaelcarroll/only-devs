import React from 'react';
import { NavLink } from 'react-router-dom';

export const Card = ({ question, id }) => {
    return (
        <NavLink to={`/question-details/${id}`}>
            <article className='question-card' id={id}>
                <h3>{question}</h3>
                {/* <p>{answers.length} of Answers</p> */}
                <button class="view-details-btn">View Details</button>
            </article>
        </NavLink>
    )
}

