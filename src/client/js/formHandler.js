
const fetch = require('node-fetch')

const confidence = document.getElementById('confidence');
const subjectivity = document.getElementById('subjectivity');
const score = document.getElementById('score');

//Main function
function handleSubmit(event) {
  event.preventDefault()

  let userURL = document.getElementById('url').value;


  console.log(" Form Submitted ")
  postData(userURL)
    .then(function(data) {
      updateUI(data);
    })
  }

const postData = async(url = '') => {
  const response = await fetch('http://localhost:8081/test', {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
       'Content-Type': 'text/plain',
    },
    body: url,
  });

  try {
    const newData = await response.json();
    console.log(newData)
    return newData
  } catch (error) {
    console.log('error', error);
  }
}

// Function to get project data

function updateUI(data) {
  console.log(data)
  confidence.innerHTML = `Confidence: ${data.confidence}`;
  subjectivity.innerHTML = `Subjectivity: ${data.subjectivity}`;
  score.innerHTML = `Score: ${data.score_tag}`;
}

function polarityScore(score) {
  switch (score) {
      case "P+":
          return "Strongly Positive"
      case "P":
          return "Positive"
      case "NEU":
          return "Neutral"
      case "N":
          return "Negative"
      case "N+":
          return "Strongly Negative"
      case "NONE":
          return "No sentiment"
      default:
          return "Invalid data"
  }
}


export { handleSubmit, polarityScore }
