const quizData = [
    { question: "Q1. What is the capital of Pakistan?", a: "Lahore", b: "Islamabad", c: "karachi", d: "quetta", correct: "b" },
    { question: "Q2. Which planet is known as the Red Planet?", a: "Mars", b: "Venus", c: "Red Pulse", d: "SunCore", correct: "a" },
    { question: "Q3. What is 2 + 2?", a: "3", b: "4", c: "5", d: "6", correct: "b" }
  ];
  
  const quizForm = document.getElementById("quiz-form");
  const submitBtn = document.getElementById("submit");
  const resultEl = document.getElementById("result");
  const scoreEl = document.getElementById("score");
  const reloadBtn = document.getElementById("reload");
  
  
  quizData.forEach((data, index) => {
    const questionHTML = `
      <div class="question-block">
        <h2>${data.question}</h2>
        <div class="option">
          <input type="radio" name="question${index}" value="a" />
          <label>${data.a}</label>
        </div>
        <div class="option">
          <input type="radio" name="question${index}" value="b" />
          <label>${data.b}</label>
        </div>
        <div class="option">
          <input type="radio" name="question${index}" value="c" />
          <label>${data.c}</label>
        </div>
        <div class="option">
          <input type="radio" name="question${index}" value="d" />
          <label>${data.d}</label>
        </div>
      </div>
    `;
    quizForm.insertAdjacentHTML("beforeend", questionHTML);
  });
  
  
  submitBtn.addEventListener("click", () => {
    let score = 0;
  
    
    quizData.forEach((data, index) => {
      const selectedAnswer = document.querySelector(
        `input[name="question${index}"]:checked`
      );
      if (selectedAnswer && selectedAnswer.value === data.correct) {
        score++;
      }
    });
  
    
    const percentage = (score / quizData.length) * 100;
  
  
    resultEl.classList.remove("hidden");
    scoreEl.innerText = `Percentage: ${percentage.toFixed(2)}%`;
    submitBtn.style.display = "none";
  });
  
  
  reloadBtn.addEventListener("click", () => {
    window.location.reload(); 
  });
  