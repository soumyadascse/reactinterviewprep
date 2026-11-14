import type { Question } from "../types/Question";

export const questions: Question[] = [
  {
    id: 1,
    topic: "hooks",
    question: "What is useState ?",
    answer:
      "useState is a React hook that lets you add state to functional components.",
    example:
      `const [count,setCount]=useState(0);`
  },

  {
    id: 2,
    topic: "hooks",
    question: "What is useEffect ?",
    answer:
      "useEffect allows side effects in functional components.",
    example:
      `useEffect(()=>{},[]);`
  },

  {
    id: 3,
    topic: "react-fundamentals",
    question: "What is JSX ?",
    answer:
      "JSX is a syntax extension for JavaScript.",
    example:
      `<h1>Hello React</h1>`
  }
];