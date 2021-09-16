import axios from "axios";

const url = 'https://onlydevs-api.herokuapp.com';

const generateApiUrl = (request) => {
  let id;
  switch (request) {
    case 'questions':
      return `${url}/questions`
    case 'answers': 
      return `${url}/questions/${id}`
    case 'robots': 
      return `${url}/robots`
    case 'votes': 
      return `${url}/votes`
    default: 
      break;
  }
};

export const getQuestions = async () => {
  const config = {
    method: 'get',
    url: generateApiUrl('questions')
  }
  return await sendRequest(config)
}

const sendRequest = async(config) => {
  return await axios(config)
    .then(response => response.data)
    .catch(error => console.error('Server Error: ' + error))
}

export const getAnswers = (id) => {

  return fetch(`https://onlydevs-api.herokuapp.com/questions/${id}`)
    .then(response => {
      if (!response.ok) {
        throw Error('Error fetching answers')
      }
      return response.json()
    })
}

// export const getAnswers = async(id) => {
//   const config = {
//     method: 'get',
//     url: generateApiUrl('answers')
//   }
//   return await sendRequest(config)

// }

export const uploadAnswer = (data) => {
  return fetch('https://onlydevs-api.herokuapp.com/questions/answer', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (!response.ok) {
        throw Error('Error uploading answer')
      }
      return response.json()
    })
    .catch(err => console.error(err));
}

export const postAnswerRating = (data) => {
  const [questionId, answerId, vote] = data
  let answerData = {
    "question_id": questionId,
    "answer_id": answerId,
    "vote": vote,
  }
  return fetch('https://onlydevs-api.herokuapp.com/questions/answer/vote', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(answerData)
  })
    .then(response => response.json())
    .catch(err => console.error(err));
}

