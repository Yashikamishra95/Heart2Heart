const questions = [
    {
        question: "How often do you feel overwhelmed by daily tasks?",
        options: [
            "Never",
            "Sometimes",
            "Often",
            "Always"
        ],
        reactionImages: [
            "never.jpeg", // Reaction for Never
            "reaction2.jpg", // Reaction for Sometimes
            "reaction3.jpg", // Reaction for Often
            "reaction4.jpg"  // Reaction for Always
        ]
    },
    {
        question: "Do you have trouble sleeping or staying asleep?",
        options: [
            "Never",
            "Occasionally",
            "Often",
            "Always"
        ],
        reactionImages: [
            "reaction1.jpg", 
            "reaction2.jpg", 
            "reaction3.jpg", 
            "reaction4.jpg"
        ]
    },
    {
        question: "How often do you feel anxious or stressed?",
        options: [
            "Never",
            "Sometimes",
            "Often",
            "Always"
        ],
        reactionImages: [
            "reaction1.jpg", 
            "reaction2.jpg", 
            "reaction3.jpg", 
            "reaction4.jpg"
        ]
    },
    {
        question: "Do you feel motivated to get out of bed every day?",
        options: [
            "Always",
            "Sometimes",
            "Rarely",
            "Never"
        ],
        reactionImages: [
            "reaction1.jpg", 
            "reaction2.jpg", 
            "reaction3.jpg", 
            "reaction4.jpg"
        ]
    },
    {
        question: "How often do you experience mood swings?",
        options: [
            "Never",
            "Sometimes",
            "Often",
            "Always"
        ],
        reactionImages: [
            "reaction1.jpg", 
            "reaction2.jpg", 
            "reaction3.jpg", 
            "reaction4.jpg"
        ]
    },
    {
        question: "Do you feel lonely or disconnected from others?",
        options: [
            "Never",
            "Sometimes",
            "Often",
            "Always"
        ],
        reactionImages: [
            "reaction1.jpg", 
            "reaction2.jpg", 
            "reaction3.jpg", 
            "reaction4.jpg"
        ]
    },
    {
        question: "How often do you take time for self-care?",
        options: [
            "Every day",
            "A few times a week",
            "Once a week",
            "Never"
        ],
        reactionImages: [
            "reaction1.jpg", 
            "reaction2.jpg", 
            "reaction3.jpg", 
            "reaction4.jpg"
        ]
    },
    {
        question: "Do you find it difficult to focus on tasks?",
        options: [
            "Never",
            "Sometimes",
            "Often",
            "Always"
        ],
        reactionImages: [
            "reaction1.jpg", 
            "reaction2.jpg", 
            "reaction3.jpg", 
            "reaction4.jpg"
        ]
    },
    {
        question: "Do you experience physical symptoms like headaches or stomachaches from stress?",
        options: [
            "Never",
            "Sometimes",
            "Often",
            "Always"
        ],
        reactionImages: [
            "reaction1.jpg", 
            "reaction2.jpg", 
            "reaction3.jpg", 
            "reaction4.jpg"
        ]
    },
    {
        question: "How often do you feel like you're losing control of your emotions?",
        options: [
            "Never",
            "Sometimes",
            "Often",
            "Always"
        ],
        reactionImages: [
            "reaction1.jpg", 
            "reaction2.jpg", 
            "reaction3.jpg", 
            "reaction4.jpg"
        ]
    }
];

let currentQuestion = 0;

function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    const questionData = questions[currentQuestion];
    questionContainer.innerHTML = `
        <h2>${questionData.question}</h2>
        ${questionData.options.map((option, index) => `
            <button class="option" onclick="selectOption(${index})">${option}</button>
        `).join('')}
    `;
    document.getElementById("reaction-img").style.display = 'none';
}

function selectOption(index) {
    const reactionImg = document.getElementById("reaction-img");
    reactionImg.src = questions[currentQuestion].reactionImages[index];
    reactionImg.style.display = 'block';
    document.getElementById("next-btn").style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
        document.getElementById("next-btn").style.display = 'none';
    } else {
        alert("Quiz Completed! Thank you for participating.");
    }
}

// Initialize the first question
displayQuestion();