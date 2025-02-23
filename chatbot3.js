const responses = {
    "how are you": "I'm doing great, thanks for asking! How are you feeling today?",
    "hello": "Hi there! I'm here for you. How are you feeling?",
    "i'm feeling sad": "I'm really sorry you're feeling that way. Let me try to cheer you up with a joke! Why don't skeletons fight each other? They don't have the guts! 😄",
    "i'm feeling down": "It's okay to feel down sometimes. You're not alone. Want to hear a joke to lift your spirits? Why don't eggs tell jokes? They might crack up! 😄",
    "i'm stressed": "Stress can be overwhelming. Take a deep breath. Remember, it's okay to take breaks. How about some advice? Try a quick walk or some deep breathing exercises!",
    "i'm happy": "That's wonderful to hear! Keep that positive energy going! 😄",
    "i'm anxious": "I understand that anxiety can be tough. It’s okay to take small steps. How about a calming breathing exercise? Inhale for 4 counts, hold for 4, exhale for 4. Let's try it together! 💆‍♀️",
    "default": "I'm not sure how you're feeling. Would you like to talk more about it? Feel free to share with me."
};

// Function to add messages to the chat window
function addMessage(message, sender) {
    const chatWindow = document.getElementById('chat-window');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender + '-message');
    messageDiv.innerHTML = <p>${message}</p>;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;  // Scroll to the latest message
}

// Function to analyze user input and provide an appropriate response
function handleUserInput() {
    const userInput = document.getElementById('user-input').value.trim().toLowerCase();
    if (userInput === "") return;

    // Display user message
    addMessage(userInput, 'user');
    
    // Analyze mood and get appropriate response
    const response = responses[userInput] || responses["default"];
    
    // Display bot response
    setTimeout(() => {
        addMessage(response, 'bot');
    }, 1000);

    // Clear user input field
    document.getElementById('user-input').value = "";
}

// Attach event listeners
document.getElementById('send-btn').addEventListener('click', handleUserInput);
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});