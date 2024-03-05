const quizData = [
    {
      question: '1.What is the primary advantage of using ArrayList in Java over traditional arrays?',
      a: 'a) ArrayLists can store elements of different data types',
      b: 'b) ArrayLists automatically resize themselves as elements are added or removed',
      c: 'c) ArrayLists have faster access time for retrieving elements',
      d: 'd) ArrayLists consume less memory compared to arrays',
      correct: 'b'
    },
    {
      question: '2.Which method is used to add an element to an ArrayList in Java?',
      a: 'a) addElement()',
      b: 'b) insertElement()',
      c: 'c) appendElement()',
      d: 'd) add()',
      correct: 'd'
    },
    {
      question: '3. What happens if you try to add an element to an ArrayList that is already at full capacity?',
      a: 'a) An error is thrown',
      b: 'b) The ArrayList automatically resizes to accommodate the new element',
      c: 'c) The new element replaces the last element in the ArrayList',
      d: 'd) The ArrayList remains unchanged',
      correct: 'b'
    },
    {
      question: '4. Which of the following statements about ArrayList resizing in Java is true?',
      a: 'a) ArrayLists never resize, they have a fixed size',
      b: 'b) ArrayLists resize automatically when they reach capacity, doubling their size',
      c: 'c) ArrayLists resize linearly with the number of elements added',
      d: 'd) ArrayLists resize only when explicitly instructed by the programmer',
      correct: 'b'
    },
    {
      question: '5. What is the time complexity of adding an element to the end of an ArrayList in Java?',
      a: 'a) O(1)',
      b: 'b) O(log n)',
      c: 'c) O(n)',
      d: 'd) O(n^2)',
      correct: 'a'
    },
    {
      question: '6. Which method is used to remove an element from an ArrayList in Java?',
      a: 'a) removeElement()',
      b: 'b) deleteElement()',
      c: 'c) remove()',
      d: 'd) erase()',
      correct: 'c'
    },
    {
      question: '7. In Java, what happens if you try to access an index that is beyond the size of the ArrayList?',
      a: 'a) An IndexOutOfBoundsException is thrown',
      b: 'b) The ArrayList automatically resizes to accommodate the new index',
      c: 'c) Null is returned',
      d: 'd) The program crashes',
      correct: 'a'
    },
    {
      question: '8. Which interface does ArrayList in Java implement?',
      a: 'a) List',
      b: 'b) Collection',
      c: 'c) Set',
      d: 'd) Map',
      correct: 'a'
    },
    {
      question: '9. What is the default initial capacity of an ArrayList in Java?',
      a: 'a) 10',
      b: 'b) 5',
      c: 'c) 0',
      d: 'd) 15',
      correct: 'a'
    },
    {
      question: '10. Which of the following statements about ArrayLists in Java is false?',
      a: 'a) ArrayLists can contain duplicate elements',
      b: 'b) ArrayLists are synchronized by default',
      c: 'c) ArrayLists can be converted to arrays using the toArray() method',
      d: 'd) ArrayLists can be sorted using the Collections.sort() method',
      correct: 'b'
    },
    {
      question: '11. How can you check if an ArrayList contains a specific element in Java?',
      a: 'a) Using the contains() method',
      b: 'b) Using the find() method',
      c: 'c) Using the search() method',
      d: 'd) Using the check() method',
      correct: 'a'
    },
    {
      question: '12. Which of the following statements about ArrayList in Java is true?',
      a: 'a) ArrayList can only store primitive data types',
      b: 'b) ArrayList is a synchronized data structure by default',
      c: 'c) ArrayList can dynamically resize itself based on the number of elements',
      d: 'd) ArrayList cannot be sorted using built-in methods',
      correct: 'c'
    },
    {
      question: '13. What happens if you try to remove an element from an ArrayList using an index that is out of bounds?',
      a: 'a) A NullPointerException is thrown',
      b: 'b) An IndexOutOfBoundsException is thrown',
      c: 'c) The element at the last index is removed',
      d: 'd) The ArrayList remains unchanged',
      correct: 'b'
    },
    {
      question: '4. Which method is used to replace an element at a specific index in an ArrayList in Java?',
      a: 'a) set()',
      b: 'b) replace()',
      c: 'c) update()',
      d: 'd) modify()',
      correct: 'a'
    },
    {
      question: '15. In Java, how can you convert an ArrayList to an array?',
      a: 'a) Using the toArray() method',
      b: 'b) Using the toList() method',
      c: 'c) Using the asArray() method',
      d: 'd) Using the convertToArray() method',
      correct: 'a'
    }
  ]
  const quiz = document.querySelector('#quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.querySelector('#question')
  const submitBtn = document.querySelector('#submit')
  
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const d_text = document.getElementById('d_text')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
  }
  
  function deselectAnswers() {
    answerEls.forEach(answer => (answer.checked = false))
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach(answerEl => {
      if (answerEl.checked) {
        answer = answerEl.id
      }
    })
  
    return answer
  }
  
  function showResults() {
    quiz.innerHTML = `
      <h2>You answered correctly at ${score}/${quizData.length} questions</h2>
  
      <button id="btn" onclick="location.reload()">Reload</button>
    `
  }
  
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
      if (answer === quizData[currentQuiz].correct) score++
    }
  
    currentQuiz++
    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      showResults()
    }
  })
  