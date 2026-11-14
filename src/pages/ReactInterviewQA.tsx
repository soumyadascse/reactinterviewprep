const qaData = [
  {
    question: "What is Virtual DOM?",
    answer:
      "Virtual DOM is a lightweight JavaScript representation of the Real DOM. React performs diffing between old and new Virtual DOM trees and updates only changed nodes."
  },

  {
    question: "What are React Fragments?",
    answer:
      "Fragments allow grouping multiple elements without adding unnecessary DOM nodes."
  },

  {
    question:
      "Difference between Controlled and Uncontrolled Components?",
    answer:
      "Controlled components are managed through React state while uncontrolled components rely on DOM references using refs."
  },

  {
    question: "What are React Hooks?",
    answer:
      "Hooks allow functional components to use state, lifecycle features, refs, and context."
  },

  {
    question: "What is Context API?",
    answer:
      "Context API helps share data globally across component trees without prop drilling."
  },

  {
    question: "What is React Suspense?",
    answer:
      "Suspense handles asynchronous rendering and enables lazy-loaded components with fallback UIs."
  },

  {
    question: "What is Higher Order Component (HOC)?",
    answer:
      "An HOC is a function that accepts a component and returns an enhanced component."
  },

  {
    question: "What is useCallback?",
    answer:
      "useCallback memoizes functions and avoids unnecessary recreation of callback functions."
  },

  {
    question: "What is useRef?",
    answer:
      "useRef stores mutable values and provides DOM element references without causing re-renders."
  },

  {
    question: "What is React.memo?",
    answer:
      "React.memo prevents unnecessary re-rendering of components when props remain unchanged."
  },

  {
    question: "What is React StrictMode?",
    answer:
      "StrictMode helps detect potential issues and unsafe practices during development."
  },

  {
    question: "What are Synthetic Events?",
    answer:
      "Synthetic Events are React's cross-browser wrapper around native browser events."
  },

  {
    question: "What is Concurrent Rendering?",
    answer:
      "Concurrent Rendering allows React to interrupt rendering work, improving UI responsiveness."
  },

  {
    question: "What is useTransition?",
    answer:
      "useTransition allows marking state updates as non-urgent to keep the interface responsive."
  },

  {
    question: "What is useReducer?",
    answer:
      "useReducer manages complex state logic using reducers and dispatched actions."
  },

  {
    question: "Why are keys required in React?",
    answer:
      "Keys help React efficiently identify changed, added, or removed elements in lists."
  },

  {
    question: "What is forwardRef?",
    answer:
      "forwardRef allows refs to be passed from parent components to child components."
  },

  {
    question: "What is Server Side Rendering (SSR)?",
    answer:
      "SSR renders HTML on the server before sending the response to the browser."
  },

  {
    question: "What are Server Components?",
    answer:
      "Server Components execute on the server, reducing client-side JavaScript."
  },

  {
    question: "What are Server Actions?",
    answer:
      "Server Actions allow server-side functions to be called directly from React components."
  },

  {
    question:
      "How do you optimize performance in React applications?",
    answer:
      "Using React.memo, useMemo, useCallback, code splitting, lazy loading, virtualization, pagination, debouncing, throttling, and proper key usage."
  },

  {
    question:
      "Difference between Class Components and Functional Components?",
    answer:
      "Class components use lifecycle methods and class syntax. Functional components use Hooks and are simpler, more readable, and preferred in modern React."
  },

  {
    question:
      "How is JSX compiled in React?",
    answer:
      "Babel compiles JSX into React.createElement() calls before execution."
  },

  {
    question:
      "What is List Virtualization?",
    answer:
      "List virtualization renders only visible rows instead of the complete dataset. Popular libraries are react-window and react-virtualized."
  },

  {
    question:
      "How does Redux work?",
    answer:
      "Redux uses Store, Actions, Reducers, and Dispatch. Actions are dispatched, reducers update state, and the store provides updated state to components."
  },

  {
    question:
      "What is a Reducer function?",
    answer:
      "A reducer is a pure function that receives current state and action and returns a new state."
  },

  {
    question:
      "What are children props?",
    answer:
      "Children props allow passing nested content into reusable components."
  },

  {
    question:
      "Difference between useEffect and useLayoutEffect?",
    answer:
      "useEffect runs after browser painting. useLayoutEffect runs synchronously before paint."
  },

  {
    question:
      "How do you connect frontend with backend?",
    answer:
      "Using Fetch API, Axios, GraphQL clients, TanStack Query, REST APIs, or WebSockets."
  },

  {
    question:
      "What is code splitting?",
    answer:
      "Code splitting divides bundles into smaller chunks loaded only when needed."
  },

  {
    question:
      "How do React.lazy and dynamic imports work?",
    answer:
      "React.lazy loads components dynamically using import() and Suspense."
  },

  {
    question:
      "What is Next.js?",
    answer:
      "Next.js is a React framework offering routing, SSR, SSG, API routes, server components, and SEO features."
  },

  {
    question:
      "What is Node.js?",
    answer:
      "Node.js is a JavaScript runtime built on Google's V8 engine."
  },

  {
    question:
      "Difference between Next.js and Node.js?",
    answer:
      "Next.js is a React framework. Node.js is a JavaScript runtime used to execute server-side code."
  },

  {
    question:
      "What is TypeScript?",
    answer:
      "TypeScript is a strongly typed superset of JavaScript that adds static typing."
  },

  {
    question:
      "Advantages of TypeScript over JavaScript?",
    answer:
      "Better tooling, static type checking, improved maintainability, cleaner refactoring, and reduced runtime bugs."
  },

  {
    question:
      "What is JWT?",
    answer:
      "JWT (JSON Web Token) is a compact token format used for authentication and authorization."
  },

  {
    question:
      "How does JWT work?",
    answer:
      "After successful login, the server generates a signed token which is sent with future requests for validation."
  },

  {
    question:
      "How to check logs?",
    answer:
      "Frontend logs are checked in browser DevTools. Backend logs are checked from server consoles, application logs, Docker logs, or cloud monitoring tools."
  },

  {
    question:
      "What is Lazy Loading?",
    answer:
      "Lazy loading loads resources only when required instead of at initial page load."
  },

  {
    question:
      "What is Middleware?",
    answer:
      "Middleware executes between request and response processing for tasks like authentication, validation, and logging."
  },

  {
    question:
      "What is an Interceptor?",
    answer:
      "Interceptors intercept requests and responses to add headers, JWT tokens, logging, error handling, and retries."
  }
];

export default function ReactInterviewQA() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">
        React Interview Questions & Answers
      </h1>

      <div className="space-y-6">
        {qaData.map((item, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-xl
              shadow-md
              border
              p-6
            "
          >
            <h2 className="text-xl font-bold text-blue-600 mb-3">
              Q{index + 1}. {item.question}
            </h2>

            <p className="text-slate-700 leading-7">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}