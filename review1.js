const quizData = [
    {
        rv: '1. The primary advantage of using ArrayList in Java over traditional arrays is that ArrayLists automatically resize themselves as elements are added or removed. This means you dont need to worry about managing the size of the array manually.',
    },
    {
        rv: '2. The method used to add an element to an ArrayList in Java is add(). This method adds the specified element to the end of the list.',
    },
    {
        rv: '3. If you try to add an element to an ArrayList that is already at full capacity, The ArrayList automatically resizes to accommodate the new element. ArrayList automatically increases its capacity to accommodate new elements.',
    },
    {
        rv: '4. The true statement about ArrayList resizing in Java is  ArrayLists resize automatically when they reach capacity, doubling their size. When the capacity of an ArrayList is reached, its size is increased by reallocating the internal array and doubling its size.',
    },
    {
        rv: '5. The time complexity of adding an element to the end of an ArrayList in Java is  O(1). Appending an element to the end of an ArrayList has constant time complexity because the ArrayList maintains a pointer to the end of the list.',
    },
    {
        rv: '6. The method used to remove an element from an ArrayList in Java is remove(). This method removes the first occurrence of the specified element from the list, if it is present.',
    },
    {
        rv: '7. If you try to access an index that is beyond the size of the ArrayList in Java,  An IndexOutOfBoundsException is thrown. This exception is thrown to indicate that an index is out of range (either negative or greater than or equal to the size of the list).',
    },
    {
        rv: '8. ArrayList in Java implements the  List interface. This interface extends the Collection interface and represents an ordered collection of elements.',
    },
    {
        rv: '9. The default initial capacity of an ArrayList in Java is  10. When an ArrayList is created without specifying its initial capacity, it starts with a default capacity of 10..',
    },
    {
        rv: '10. The false statement about ArrayLists in Java is  ArrayLists are synchronized by default. ArrayLists are not synchronized by default, meaning they are not thread-safe.',
    },
    {
        rv: '11. You can check if an ArrayList contains a specific element in Java using a) Using the contains() method. The contains() method returns true if the list contains the specified element.',
    },
    {
        rv: '12. The true statement about ArrayList in Java is ArrayList can dynamically resize itself based on the number of elements. ArrayLists automatically resize themselves as elements are added or removed.',
    },
    {
        rv: '13. If you try to remove an element from an ArrayList using an index that is out of bounds, An IndexOutOfBoundsException is thrown. This exception is thrown to indicate that an index is out of range.',
    },
    {
        rv: '14. The method used to replace an element at a specific index in an ArrayList in Java is  set(). This method replaces the element at the specified position in the list with the specified element.',
    },
    {
        rv: '15. You can convert an ArrayList to an array in Java using  Using the toArray() method. This method returns an array containing all of the elements in the list in proper sequence (from first to last element).',
    },
  ]
  const review = document.querySelector('#review')

  const questionEl = document.querySelector('#question')
  const submitBtn = document.querySelector('#submit')
  
  
  let currentQuiz = 0
  
  loadQuiz()
  
  function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]
  
    questionEl.innerText = currentQuizData.rv
    console.log(currentQuizData.rv)
  }
  
  
  function showResults() {
    review.innerHTML = `
      <h2>Do you want to take a Quiz?</h2>
      <button id="btn" onclick="location.reload()">Review Again</button>
      <br>
      <button id="btn" onclick="window.location.href = 'quiz1.html'">Take a Quiz</button>
    `
  }
  
  submitBtn.addEventListener('click', () => {
    // const answer = getSelected()
    // if (answer) {
    //   if (answer === quizData[currentQuiz].correct) score++
    // }
  
    currentQuiz++
    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      showResults()
    }
  })
  