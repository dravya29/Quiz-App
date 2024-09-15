const quizContainer = document.getElementById('quiz-container')
const questionElement = document.getElementById('question')
const optionsContainer = document.getElementById('options-container')
const submitBtn = document.getElementById('submitBtn')
const feedbackElement = document.getElementById('feedback')
const scoreElement = document.getElementById('score')

let currentQuestionIndex = 0
let score = 0

// Array of quiz questions
const quizQuestions = [
  {
    question: 'What is the capital of Japan?',
    options: ['Tokyo', 'Seoul', 'Bangkok', 'Beijing'],
    correctAnswer: 'Tokyo'
  },
  {
    question: "What is Earth's largest continent?",
    options: ['Europe', 'Africa', 'Asia', 'South America'],
    correctAnswer: 'Asia'
  },
  {
    question: 'How many wheels does a tricycle have?',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctAnswer: 'Three'
  },
  {
    question: 'What is the term for a female donkey?',
    options: ['Mare', 'Ewe', 'Jenny', 'Filly'],
    correctAnswer: 'Jenny'
  },
  {
    question: 'What is a baby lion called?',
    options: ['Pup', 'Cub', 'Fawn', 'Calf'],
    correctAnswer: 'Cub'
  },
  {
    question: 'What vitamin is produced in the skin when exposed to sunlight?',
    options: ['Vitamin C', 'Vitamin B12', 'Vitamin A', 'Vitamin D'],
    correctAnswer: 'Vitamin D'
  },
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris'
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
    correctAnswer: 'Mars'
  },
  {
    question: 'How many sides does a Pentagon have?',
    options: ['Five', 'Six', 'Seven', 'Eight'],
    correctAnswer: 'Five'
  },
  {
    question: 'What is the term for animals that eat plants?',
    options: ['Carnivores', 'Insectivores', 'Omnivores', 'Herbivores'],
    correctAnswer: 'Herbivores'
  },
  {
    question: 'Where two rivers meet to form a single channel is called?',
    options: ['Confluence', 'Tributary', 'Delta', 'Estuary'],
    correctAnswer: 'Confluence'
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Venus', 'Jupiter', 'saturn', 'Uranus'],
    correctAnswer: 'Jupiter'
  },
  {
    question: 'Hemoglobin is a type of ?',
    options: ['Lipid', 'Vitamin', 'Carbohydrate', 'Protein'],
    correctAnswer: 'Protein'
  },
  {
    question: 'What is the capital of Australia?',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
    correctAnswer: 'Canberra'
  },
  {
    question: 'What is essential for muscle repair?',
    options: ['Vitamin C', 'Calcium', 'Fiber', 'Protein'],
    correctAnswer: 'Protein'
  }
]

// Function to load the current question and options
function loadQuestion () {
  const currentQuestion = quizQuestions[currentQuestionIndex]
  questionElement.textContent = currentQuestion.question

  // Clear previous options
  optionsContainer.innerHTML = ''

  // Create and append options
  currentQuestion.options.forEach((option, index) => {
    const optionButton = document.createElement('button')
    optionButton.textContent = option
    optionButton.onclick = function () {
      selectAnswer(option, currentQuestion.correctAnswer)
    }
    optionsContainer.appendChild(optionButton)
  })
}

// Function to handle user's answer
function selectAnswer (selectedOption, correctAnswer) {
  if (selectedOption === correctAnswer) {
    feedbackElement.textContent = 'Correct!'
    score++
    scoreElement.textContent = 'Score: ' + score
  } else {
    feedbackElement.textContent =
      'Incorrect. The correct answer is: ' + correctAnswer
  }

  // Move to the next question
  currentQuestionIndex++

  // Check if the quiz is complete
  if (currentQuestionIndex < quizQuestions.length) {
    loadQuestion()
  } else {
    endQuiz()
  }
}

// Function to handle quiz completion
function endQuiz () {

  scoreElement.textContent =
    'Final Score: ' + score + ' out of ' + quizQuestions.length
  if (score < 10) {
    quizContainer.innerHTML = '<h3>You have Failed the Quiz</h3>'
    let imgElement = document.createElement('img')
    quizContainer.appendChild(imgElement)
    imgElement.classList.add('img-sizing')
    imgElement.setAttribute(
      'src',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgzvrEynQextbwtu1Gr5UsHtBwFP-Wof65Ng&s'
    )
  } else {
    quizContainer.innerHTML = '<h3>You have Passed the Quiz</h>'
    let imgElement = document.createElement('img')
    quizContainer.appendChild(imgElement)
    imgElement.classList.add('img-sizing')
    imgElement.setAttribute(
      'src',
      'https://png.pngtree.com/png-vector/20191118/ourmid/pngtree-golden-winner-cup-icon-cartoon-style-png-image_1996931.jpg'
    )
  }
}

// Load the first question when the page loads
loadQuestion()
