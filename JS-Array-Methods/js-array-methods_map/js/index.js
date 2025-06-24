console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];

const lowerCaseAnswers = cards.map(card => card.answer.toLocaleLowerCase()); //wandelt Antwort in Kleinbuchstaben

const questionsAndAnswersTogether = cards.map(card=> `${card.question} - ${card.answer}`); //Kombiniert FrageAntwort und speichert in neuem Array

const questionAndAnswer = cards.map(card => ({
  question: card.question,
  answer: card.answer,
})); //Erstellt neues Array mit Objekten, das jeweilige Antwort enthält

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };

console.log(questionAndAnswer)
