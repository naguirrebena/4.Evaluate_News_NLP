
const fetch = require('node-fetch')

function handleSubmit(event) {
  event.preventDefault(
    )


const polarity = document.getElementById('polarity');
const subjectivity = document.getElementById('subjectivity');
const confidence = document.getElementById('confidence');
const errorURL = document.getElementById('errorMessage')


  let userURL = document.getElementById('url').value;

  console.log(" Form Submitted ")

  if (!Client.checkURL(userURL)) {
      console.log('URL not valid')
      errorURL.innerHTML = 'Enter a valid URL.'
      return
  } else {
      errorURL.innerHTML = ""
  }

  postData(userURL)
    .then(function(data) {
      updateUI(data);
    })
  }

const postData = async(url = '') => {
  const response = await fetch('http://localhost:8081/article', {
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
  polarity.innerHTML = "Polarity: " + polarityScore(data.score_tag);
  subjectivity.innerHTML = `Subjectivity: ${data.subjectivity}`;
  confidence.innerHTML = `Confidence: ${data.confidence}`;
  
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
