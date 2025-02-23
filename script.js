  const chatMessages = document.getElementById("chatMessages")
  const userInput = document.getElementById("userInput")
  const sendButton = document.getElementById("sendButton")
  
  const conversationHistory = []
  let currentQuestion = 0
  
  const questions = [
    "Hi there! I'm MindfulBot, your friendly mental health check-in buddy. How are you feeling today?",
    "On a scale of 1-10, how would you rate your stress level right now?",
    "Have you been getting enough sleep lately?",
    "How's your appetite been? Are you eating regular meals?",
    "Have you engaged in any activities you enjoy recently?",
    "Is there anything specific that's been bothering you lately?",
  ]
  
  const positiveReinforcements = [
    "Thank you for sharing that with me. Remember, it's okay to have ups and downs.",
    "I appreciate your honesty. Your feelings are valid, whatever they may be.",
    "You're doing great by checking in on your mental health. That's a big step!",
    "Remember, self-care is important. Make sure to be kind to yourself.",
    "Your mental health matters, and I'm glad you're taking time to reflect on it.",
  ]
  
  const selfCareTips = [
    "Try taking a few deep breaths when you feel stressed. It can help calm your mind.",
    "Consider going for a short walk outside. Nature can have a positive effect on mood.",
    "Staying hydrated is important for both physical and mental health. Remember to drink water regularly.",
    "If you're feeling overwhelmed, try making a list of tasks and tackle them one at a time.",
    "Don't forget to reach out to friends or family if you need support. Connection is important.",
  ]
  
  function addMessage(message, isUser = false) {
    const messageElement = document.createElement("div")
    messageElement.classList.add("message")
    messageElement.classList.add(isUser ? "user-message" : "bot-message")
    messageElement.textContent = message
    chatMessages.appendChild(messageElement)
    chatMessages.scrollTop = chatMessages.scrollHeight
  }
  
  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)]
  }
  
  function askQuestion() {
    if (currentQuestion < questions.length) {
      addMessage(questions[currentQuestion])
      currentQuestion++
    } else {
      addMessage(
        "Thank you for chatting with me today. Remember, if you're struggling, it's always okay to seek professional help. Take care!",
      )
    }
  }
  
  function handleUserInput() {
    const userMessage = userInput.value.trim()
    if (userMessage) {
      addMessage(userMessage, true)
      conversationHistory.push({ question: questions[currentQuestion - 1], answer: userMessage })
      userInput.value = ""
  
      // Add a positive reinforcement
      setTimeout(() => {
        addMessage(getRandomItem(positiveReinforcements))
      }, 500)
  
      // Suggest a self-care tip
      setTimeout(() => {
        addMessage(getRandomItem(selfCareTips))
      }, 1000)
  
      // Ask the next question
      setTimeout(askQuestion, 1500)
    }
  }
  
  sendButton.addEventListener("click", handleUserInput)
  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handleUserInput()
    }
  })
  
  // Start the conversation
  askQuestion()
  
    