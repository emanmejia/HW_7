// Question 16 - React to Events
// Emmanuel Mejia

const questions = [
    {
      statement: "2+2?",
      answer: "2+2 = 4"
    },
    {
      statement: "In which year did Christopher Columbus discover America?",
      answer: "1492"
    },
    {
      statement:
        "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
      answer: "The E letter"
    }
  ];
  
  
  const content = document.querySelector('#content');
  const dl = document.createElement('dl');
  for (const question of questions) {
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');
    dt.innerText = question.statement;
    const btn = document.createElement('dd');
    dd.innerHTML = "<dd>Show answer</dd>";
    dd.id = question.answer;
    dl.appendChild(dt);
    dl.appendChild(dd);
    console.log(dd);
    dl.appendChild(document.createElement('br'));
  }
  content.appendChild(dl);
  
  const dds = document.querySelectorAll('dd');
  dds.forEach(function(b){
    console.log(b.getAttribute("id"));
  });