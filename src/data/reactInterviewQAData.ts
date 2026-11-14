export interface QAItem {
  question: string;
  answer: string;
  codeSnippet: string;
  realWorldScenario: string;
}

// export const qaData: QAItem[] = [
//   {
//     question: "What is Virtual DOM?",
//     answer:
//       "What is Virtual DOM? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What is Virtual DOM? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "What are React Fragments?",
//     answer:
//       "What are React Fragments? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What are React Fragments? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "Difference between Controlled and Uncontrolled Components?",
//     answer:
//       "Difference between Controlled and Uncontrolled Components? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: Difference between Controlled and Uncontrolled Components? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "What are React Hooks?",
//     answer:
//       "What are React Hooks? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What are React Hooks? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "What is Context API?",
//     answer:
//       "What is Context API? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What is Context API? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "What is React Suspense?",
//     answer:
//       "What is React Suspense? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What is React Suspense? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "What is Higher Order Component (HOC)?",
//     answer:
//       "What is Higher Order Component (HOC)? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What is Higher Order Component (HOC)? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "What is useCallback?",
//     answer:
//       "What is useCallback? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What is useCallback? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "What is useRef?",
//     answer:
//       "What is useRef? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What is useRef? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "What is React.memo?",
//     answer:
//       "What is React.memo? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What is React.memo? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "What is React StrictMode?",
//     answer:
//       "What is React StrictMode? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What is React StrictMode? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "What are Synthetic Events?",
//     answer:
//       "What are Synthetic Events? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What are Synthetic Events? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "What is Concurrent Rendering?",
//     answer:
//       "What is Concurrent Rendering? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What is Concurrent Rendering? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "What is useTransition?",
//     answer:
//       "What is useTransition? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What is useTransition? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "What is useReducer?",
//     answer:
//       "What is useReducer? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What is useReducer? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "Why are keys required in React?",
//     answer:
//       "Why are keys required in React? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: Why are keys required in React? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "What is forwardRef?",
//     answer:
//       "What is forwardRef? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What is forwardRef? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "What is Server Side Rendering (SSR)?",
//     answer:
//       "What is Server Side Rendering (SSR)? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What is Server Side Rendering (SSR)? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "What are Server Components?",
//     answer:
//       "What are Server Components? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What are Server Components? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "What are Server Actions?",
//     answer:
//       "What are Server Actions? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What are Server Actions? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "How do you optimize performance in React applications?",
//     answer:
//       "How do you optimize performance in React applications? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: How do you optimize performance in React applications? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "Difference between Class Components and Functional Components?",
//     answer:
//       "Difference between Class Components and Functional Components? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: Difference between Class Components and Functional Components? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "How is JSX compiled in React?",
//     answer:
//       "How is JSX compiled in React? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: How is JSX compiled in React? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "What is List Virtualization?",
//     answer:
//       "What is List Virtualization? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What is List Virtualization? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "How does Redux work?",
//     answer:
//       "How does Redux work? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: How does Redux work? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "What is a Reducer function?",
//     answer:
//       "What is a Reducer function? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What is a Reducer function? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "What are children props?",
//     answer:
//       "What are children props? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What are children props? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "Difference between useEffect and useLayoutEffect?",
//     answer:
//       "Difference between useEffect and useLayoutEffect? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: Difference between useEffect and useLayoutEffect? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "How do you connect frontend with backend?",
//     answer:
//       "How do you connect frontend with backend? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: How do you connect frontend with backend? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "What is code splitting?",
//     answer:
//       "What is code splitting? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What is code splitting? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "How do React.lazy and dynamic imports work?",
//     answer:
//       "How do React.lazy and dynamic imports work? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: How do React.lazy and dynamic imports work? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "What is Next.js?",
//     answer:
//       "What is Next.js? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What is Next.js? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "What is Node.js?",
//     answer:
//       "What is Node.js? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What is Node.js? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "Difference between Next.js and Node.js?",
//     answer:
//       "Difference between Next.js and Node.js? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: Difference between Next.js and Node.js? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "What is TypeScript?",
//     answer:
//       "What is TypeScript? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What is TypeScript? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "Advantages of TypeScript over JavaScript?",
//     answer:
//       "Advantages of TypeScript over JavaScript? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: Advantages of TypeScript over JavaScript? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "What is JWT?",
//     answer:
//       "What is JWT? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What is JWT? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "How does JWT work?",
//     answer:
//       "How does JWT work? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: How does JWT work? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "How to check logs?",
//     answer:
//       "How to check logs? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: How to check logs? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "What is Lazy Loading?",
//     answer:
//       "What is Lazy Loading? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What is Lazy Loading? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "What is Middleware?",
//     answer:
//       "What is Middleware? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What is Middleware? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
//   {
//     question: "What is an Interceptor?",
//     answer:
//       "What is an Interceptor? is an important interview topic. In interviews, explain the definition, why it is used, its benefits, limitations, and when you would choose it in a real project. Discuss practical usage, performance considerations, and enterprise application examples rather than only giving a textbook definition.",
//     codeSnippet: '// Example code\nconsole.log("Interview Example");',
//     realWorldScenario:
//       "Real project scenario: What is an Interceptor? is commonly discussed while building enterprise dashboards, authentication systems, e-commerce applications, reporting systems, or large-scale React applications.",
//   },
// ];
export const qaData: QAItem[] = [
  {
    question: "What is Virtual DOM?",
    answer: `Virtual DOM is a lightweight JavaScript representation of the real DOM. Whenever state or props change, React creates a new Virtual DOM tree and compares it with the previous one using a process called reconciliation. React then updates only the affected parts of the real DOM instead of re-rendering the entire page.

This improves performance because direct DOM operations are expensive. During interviews, explain that Virtual DOM alone is not the optimization. The real benefit comes from React's diffing algorithm and efficient update process.`,
    codeSnippet: `const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
  {count}
</button>`,
    realWorldScenario: `In a dashboard showing thousands of customer records, if one row changes, React updates only that row instead of rebuilding the entire table.`,
  },
  {
    question: "What are React Fragments?",
    answer: `React Fragments allow grouping multiple elements without adding extra nodes to the DOM. They help keep the DOM clean and avoid unnecessary wrapper divs.

Fragments are commonly used in reusable UI components where adding extra markup can break CSS layouts or flex/grid structures.`,
    codeSnippet: `<>
  <h1>Title</h1>
  <p>Description</p>
</>`,
    realWorldScenario: `Useful when building table rows or layout components where extra wrapper elements can break styling.`,
  },
  {
    question: "Difference between Controlled and Uncontrolled Components?",
    answer: `Controlled components use React state as the source of truth. Every value change updates component state. Uncontrolled components store values inside the DOM and are accessed using refs.

Controlled components are preferred in enterprise forms because validation, dynamic behavior, and state tracking become easier.`,
    codeSnippet: `const [name, setName] = useState('');
<input value={name} onChange={(e) => setName(e.target.value)} />`,
    realWorldScenario: `Registration forms, checkout pages, and profile management screens typically use controlled components for validation and business rules.`,
  },
  {
    question: "What are React Hooks?",
    answer: `Hooks allow functional components to use React features such as state management, side effects, context, and references without writing class components.

Popular hooks include useState, useEffect, useMemo, useCallback, useRef, useContext, and useReducer. Modern React applications are built primarily using hooks.`,
    codeSnippet: `const [users, setUsers] = useState([]);`,
    realWorldScenario: `Hooks simplify development and improve code reuse through custom hooks such as useAuth, useApi, and usePagination.`,
  },
  {
    question: "What is Context API?",
    answer: `Context API provides a way to share data across the component tree without passing props through multiple levels.

It is useful for global data such as authenticated user information, themes, language preferences, and permissions. Context should not replace all state management solutions but is excellent for cross-cutting concerns.`,
    codeSnippet: `const ThemeContext = createContext('light');`,
    realWorldScenario: `A theme switcher where every component needs access to dark mode settings.`,
  },
  {
    question: "What is React Suspense?",
    answer: `React Suspense helps manage asynchronous rendering. It allows developers to display fallback content while components or data are loading.

It is commonly used with lazy loading and modern React rendering features.`,
    codeSnippet: `<Suspense fallback={<Loader />}>
  <Dashboard />
</Suspense>`,
    realWorldScenario: `Display a loading spinner while downloading a large reporting module.`,
  },
  {
    question: "What is Higher Order Component (HOC)?",
    answer: `A Higher Order Component is a function that accepts a component and returns a new enhanced component.

HOCs are traditionally used for authentication, logging, permissions, analytics, and reusing component logic.`,
    codeSnippet: `const ProtectedPage = withAuth(Dashboard);`,
    realWorldScenario: `Restricting pages to authenticated users in enterprise applications.`,
  },
  {
    question: "What is useCallback?",
    answer: `useCallback memoizes functions and returns the same function instance unless dependencies change.

It is mainly used with React.memo to avoid unnecessary child component re-renders. Do not use it everywhere because it also has a cost.`,
    codeSnippet: `const fetchUsers = useCallback(() => {
  loadUsers();
}, []);`,
    realWorldScenario: `Large data grids where callback functions are passed to hundreds of row components.`,
  },
  {
    question: "What is useRef?",
    answer: `useRef stores mutable values that survive renders without causing re-renders. It is also used to directly access DOM elements.

Unlike useState, updating a ref does not trigger a component update.`,
    codeSnippet: `const inputRef = useRef(null);
inputRef.current?.focus();`,
    realWorldScenario: `Auto-focusing search inputs and integrating third-party libraries.`,
  },
  {
    question: "What is React.memo?",
    answer: `React.memo prevents unnecessary re-rendering of functional components when props have not changed.

It performs a shallow comparison of props and is often used together with useCallback and useMemo for optimization.`,
    codeSnippet: `export default React.memo(UserCard);`,
    realWorldScenario: `Improving performance in dashboards with many reusable cards and widgets.`,
  },
  {
    question: "What is React StrictMode?",
    answer: `React StrictMode is a development-only feature that helps identify potential issues in a React application. It enables additional checks and warnings for unsafe lifecycle methods, side effects, deprecated APIs, and unexpected rendering behavior.

One important thing to remember is that StrictMode intentionally invokes some functions twice in development to help developers detect side effects. This behavior does not occur in production builds.

In interviews, explain that StrictMode is a debugging and code-quality tool rather than a performance optimization feature.`,
    codeSnippet: `
<React.StrictMode>
  <App />
</React.StrictMode>
`,
    realWorldScenario: `Useful when modernizing a large legacy React application to identify unsafe code patterns before production deployment.`,
  },
  {
    question: "What are Synthetic Events?",
    answer: `Synthetic Events are React's wrapper around native browser events. React normalizes events across browsers so developers can write consistent event-handling code without worrying about browser-specific differences.

Synthetic Events provide the same interface as native events and improve cross-browser compatibility.`,
    codeSnippet: `
const handleClick = (event) => {
  console.log(event.type);
};

<button onClick={handleClick}>Save</button>
`,
    realWorldScenario: `Used extensively in forms, search inputs, buttons, and keyboard interactions where consistent behavior across browsers is required.`,
  },
  {
    question: "What is Concurrent Rendering?",
    answer: `Concurrent Rendering is a React capability that allows rendering work to be interrupted, paused, resumed, and prioritized. Instead of blocking the UI while processing expensive updates, React can keep user interactions responsive.

It improves user experience in applications that deal with large datasets or complex UI updates.`,
    codeSnippet: `
startTransition(() => {
  setFilteredUsers(users);
});
`,
    realWorldScenario: `Useful in analytics dashboards where filtering thousands of records should not freeze the user interface.`,
  },
  {
    question: "What is useTransition?",
    answer: `useTransition is a React Hook that allows you to mark state updates as non-urgent. React prioritizes urgent updates such as typing and clicks while processing less important updates in the background.

This makes applications feel faster and more responsive.`,
    codeSnippet: `
const [isPending, startTransition] = useTransition();

startTransition(() => {
  setResults(data);
});
`,
    realWorldScenario: `Commonly used in search screens where filtering results should not interrupt typing responsiveness.`,
  },
  {
    question: "What is useReducer?",
    answer: `useReducer is a React Hook used to manage complex state logic. It is often preferred over useState when state transitions depend on multiple actions or when business logic becomes difficult to manage.

It follows a pattern similar to Redux using actions and reducers.`,
    codeSnippet: `
const [state, dispatch] = useReducer(
  reducer,
  initialState
);
`,
    realWorldScenario: `Useful in shopping carts, workflow dashboards, and multi-step forms with complex state management requirements.`,
  },
  {
    question: "Why are keys required in React?",
    answer: `Keys help React uniquely identify items in a list. They allow React to efficiently determine which elements were added, removed, or modified during re-rendering.

Using stable keys improves performance and prevents UI inconsistencies.`,
    codeSnippet: `
users.map(user => (
  <UserCard
    key={user.id}
    user={user}
  />
));
`,
    realWorldScenario: `Used heavily in customer lists, transaction tables, product catalogs, and report grids.`,
  },
  {
    question: "What is forwardRef?",
    answer: `forwardRef allows a parent component to pass a ref directly to a child component. This is useful when reusable components need to expose internal DOM elements such as inputs, buttons, or textareas.

It helps component libraries remain flexible and reusable.`,
    codeSnippet: `
const Input = forwardRef(
  (props, ref) => (
    <input ref={ref} {...props} />
  )
);
`,
    realWorldScenario: `Frequently used when building enterprise design systems and reusable form controls.`,
  },
  {
    question: "What is Server Side Rendering (SSR)?",
    answer: `Server Side Rendering means HTML is generated on the server before being sent to the browser. This improves SEO and reduces the time required for users to see meaningful content.

Frameworks like Next.js provide built-in SSR capabilities.`,
    codeSnippet: `
export async function getServerSideProps() {
  return {
    props: {}
  };
}
`,
    realWorldScenario: `Used in e-commerce platforms, marketing websites, and public-facing portals where SEO is critical.`,
  },
  {
    question: "What are Server Components?",
    answer: `Server Components execute only on the server and reduce the amount of JavaScript sent to the browser. They can directly access databases and backend services without exposing sensitive implementation details.

This leads to smaller bundles and faster page loads.`,
    codeSnippet: `
async function Users() {
  const users = await getUsers();
  return <div>{users.length}</div>;
}
`,
    realWorldScenario: `Useful in data-heavy enterprise applications where reducing client bundle size is important.`,
  },
  {
    question: "What are Server Actions?",
    answer: `Server Actions allow developers to execute server-side logic directly from React components without creating separate API endpoints for every operation.

They simplify data mutations and reduce boilerplate code.`,
    codeSnippet: `
"use server";

export async function createUser() {
  // save user
}
`,
    realWorldScenario: `Often used for user registration, profile updates, content management, and order processing workflows.`,
  },

  {
    question: "How do you optimize performance in React applications?",
    answer: `
Performance optimization in React involves reducing unnecessary rendering,
decreasing bundle size, and improving user experience.

Common techniques include:

• React.memo
• useMemo
• useCallback
• Lazy Loading
• Code Splitting
• Virtualization
• Pagination
• Debouncing
• Throttling
• Proper state management

During interviews, explain that optimization should be driven by profiling and measurement rather than prematurely applying hooks everywhere.

React DevTools Profiler is commonly used to identify bottlenecks before optimization.
`,
    codeSnippet: `
const UserCard = React.memo(
  ({ user }) => (
    <div>{user.name}</div>
  )
);
`,
    realWorldScenario: `
A dashboard showing thousands of records experienced slow rendering.
Using React.memo, virtualization, and lazy loading reduced rendering time significantly.
`,
  },

  {
    question: "Difference between Class Components and Functional Components?",
    answer: `
Class Components were the traditional way of creating React components before Hooks were introduced.

Functional Components are now preferred because they are simpler, easier to read, and support Hooks.

Class Components use lifecycle methods such as:

• componentDidMount
• componentDidUpdate
• componentWillUnmount

Functional Components use Hooks such as:

• useState
• useEffect
• useMemo

Modern React development primarily uses Functional Components.
`,
    codeSnippet: `
function Dashboard() {
  const [users, setUsers] =
    useState([]);
  return <div>Hello</div>;
}
`,
    realWorldScenario: `
Most enterprise React applications today are built entirely with Functional Components because Hooks provide cleaner state management and better code reuse.
`,
  },

  {
    question: "How is JSX compiled in React?",
    answer: `
JSX is not understood directly by browsers.

During the build process, Babel converts JSX into JavaScript function calls.

For example:

<h1>Hello</h1>

becomes:

React.createElement(
  "h1",
  null,
  "Hello"
)

JSX provides a cleaner and more readable syntax while ultimately being transformed into normal JavaScript.
`,
    codeSnippet: `
const el = (
  <h1>Hello</h1>
);
`,
    realWorldScenario: `
Understanding JSX compilation helps developers troubleshoot build issues and optimize bundling configurations.
`,
  },

  {
    question: "What is List Virtualization?",
    answer: `
List Virtualization is a performance technique where only visible rows are rendered instead of rendering the entire dataset.

When displaying thousands of rows, rendering every item can cause performance problems.

Libraries:

• react-window
• react-virtualized

Virtualization dramatically reduces DOM nodes and rendering costs.
`,
    codeSnippet: `
<FixedSizeList
  height={600}
  itemCount={10000}
  itemSize={35}
>
  {Row}
</FixedSizeList>
`,
    realWorldScenario: `
Banking portals, CRM systems, and reporting applications often display thousands of records and use virtualization for performance.
`,
  },

  {
    question: "What are children props?",
    answer: `
children is a special React prop that allows components to render nested content.

It enables component composition and reuse.

Instead of hardcoding UI content, reusable components can render whatever is passed between their opening and closing tags.

This is one of the most important patterns in React.
`,
    codeSnippet: `
<Card>
  <h1>User Details</h1>
</Card>

function Card({ children }) {
  return <div>{children}</div>;
}
`,
    realWorldScenario: `
Modal, Card, Layout, and Dialog components commonly use children props to render dynamic content.
`,
  },

  {
    question: "Difference between useEffect and useLayoutEffect?",
    answer: `
Both Hooks handle side effects.

useEffect runs after the browser paints the screen.

useLayoutEffect runs synchronously before the browser paints.

Because useLayoutEffect blocks painting, it should be used sparingly.

Use useEffect for:
• API calls
• Event listeners
• Timers

Use useLayoutEffect for:
• Measuring DOM dimensions
• Calculating layouts
• Preventing visual flickering
`,
    codeSnippet: `
useEffect(() => {
  fetchUsers();
}, []);

useLayoutEffect(() => {
  calculateHeight();
}, []);
`,
    realWorldScenario: `
A grid component calculating column widths before rendering often uses useLayoutEffect to prevent UI flicker.
`,
  },

  {
    question: "What is code splitting?",
    answer: `
Code Splitting is the process of breaking a large JavaScript bundle into smaller chunks.

Instead of downloading the entire application upfront, code is loaded only when required.

Benefits:

• Smaller initial bundle
• Faster load time
• Better performance

Code splitting is commonly implemented using React.lazy and dynamic imports.
`,
    codeSnippet: `
const Dashboard =
  lazy(() =>
    import("./Dashboard")
  );
`,
    realWorldScenario: `
Enterprise systems often contain large reporting modules used by only a small percentage of users. Loading them on demand improves startup performance.
`,
  },

  {
    question: "How do React.lazy and dynamic imports work?",
    answer: `
React.lazy allows components to be loaded dynamically using import().

The component is downloaded only when needed.

Lazy-loaded components must be wrapped inside Suspense.

This approach reduces bundle size and improves the first-page load experience.
`,
    codeSnippet: `
const Reports = React.lazy(
  () => import("./Reports")
);

<Suspense fallback={<Loader />}>
  <Reports />
</Suspense>
`,
    realWorldScenario: `
Admin-only features are often lazy loaded because most users never access them.
`,
  },

  {
    question: "What is Lazy Loading?",
    answer: `
Lazy Loading is a general performance optimization technique that delays loading resources until they are actually required.

It can be applied to:

• Components
• Routes
• Images
• Videos
• API modules

The primary goal is reducing the initial load time of an application.
`,
    codeSnippet: `
const UsersPage =
  lazy(() =>
    import("./UsersPage")
  );
`,
    realWorldScenario: `
E-commerce websites often lazy-load images and product recommendations only when users scroll near them.
`,
  },
  {
    question: "How does Redux work?",
    answer: `
Redux is a predictable state management library used to manage application-wide state.

Redux follows a unidirectional data flow:

1. Component dispatches an action.
2. Action is sent to reducer.
3. Reducer calculates new state.
4. Store updates state.
5. React components receive updated data.

Redux Toolkit is now the recommended approach for modern Redux development because it reduces boilerplate code and simplifies state management.

Redux is most useful when multiple unrelated components need access to shared state.
`,
    codeSnippet: `
dispatch(
  addUser(user)
);
`,
    realWorldScenario: `
A banking dashboard contains Accounts, Transactions, Notifications, and User Profile modules. Redux helps all modules access and update shared state consistently.
`,
  },

  {
    question: "What is a Reducer function?",
    answer: `
A reducer is a pure function that receives the current state and an action and returns a new state.

Reducers must be predictable and should never directly mutate state.

The reducer determines how state changes based on the dispatched action type.

Reducers are used in Redux and also in React's useReducer Hook.
`,
    codeSnippet: `
function reducer(
  state,
  action
) {
  switch(action.type) {
    case "ADD":
      return {
        ...state,
        count: state.count + 1
      };

    default:
      return state;
  }
}
`,
    realWorldScenario: `
Order management systems often use reducers to handle actions such as creating orders, updating status, and cancelling transactions.
`,
  },

  {
    question: "How do you connect frontend with backend?",
    answer: `
Frontend applications communicate with backend services using HTTP requests.

Common approaches include:

• Fetch API
• Axios
• GraphQL
• React Query / TanStack Query
• WebSockets

Typically, React sends requests to REST APIs exposed by Spring Boot, Node.js, .NET, or other backend services.

Authentication tokens such as JWT are usually sent in request headers.
`,
    codeSnippet: `
axios.get(
  "/api/users"
)
.then(res =>
  setUsers(res.data)
);
`,
    realWorldScenario: `
A React customer portal calling Spring Boot APIs to load profile information, transactions, and notifications.
`,
  },

  {
    question: "What is Next.js?",
    answer: `
Next.js is a React framework that provides built-in features such as:

• Server Side Rendering (SSR)
• Static Site Generation (SSG)
• API Routes
• Image Optimization
• Server Components
• Routing
• SEO Optimization

It helps developers build production-ready React applications with better performance and SEO support.
`,
    codeSnippet: `
export default function Home() {
  return <h1>Home</h1>;
}
`,
    realWorldScenario: `
E-commerce websites often use Next.js because SEO and page performance directly affect sales and search rankings.
`,
  },

  {
    question: "What is Node.js?",
    answer: `
Node.js is a JavaScript runtime built on Google's V8 engine.

It allows JavaScript to run outside the browser and is commonly used for backend development.

Node.js is event-driven and non-blocking, making it suitable for APIs, microservices, real-time applications, and streaming platforms.
`,
    codeSnippet: `
const http =
  require("http");

http.createServer(
  (req,res) => {
    res.end("Hello");
  }
);
`,
    realWorldScenario: `
Building REST APIs that serve React applications with customer, order, and reporting data.
`,
  },

  {
    question: "Difference between Next.js and Node.js?",
    answer: `
Node.js is a runtime environment used to execute JavaScript outside the browser.

Next.js is a React framework that runs on top of Node.js.

Node.js primarily provides backend capabilities, while Next.js provides frontend and full-stack development features including SSR and routing.

In simple terms:

Node.js = Runtime
Next.js = Framework
`,
    codeSnippet: `
Node.js
  ↓
Next.js
  ↓
React App
`,
    realWorldScenario: `
A company may use Node.js for backend microservices while using Next.js for customer-facing web applications.
`,
  },

  {
    question: "What is TypeScript?",
    answer: `
TypeScript is a strongly typed superset of JavaScript developed by Microsoft.

It adds static typing, interfaces, generics, enums, and compile-time error checking.

TypeScript improves code maintainability, developer productivity, and reduces runtime bugs.

Most enterprise React applications now use TypeScript by default.
`,
    codeSnippet: `
interface User {
  id: number;
  name: string;
}
`,
    realWorldScenario: `
Large projects with hundreds of developers use TypeScript to enforce type safety and prevent integration issues.
`,
  },

  {
    question: "Advantages of TypeScript over JavaScript?",
    answer: `
TypeScript offers several advantages:

• Static Type Checking
• Better IDE Support
• Auto Completion
• Easier Refactoring
• Better Maintainability
• Early Error Detection

It improves developer productivity and reduces production bugs caused by unexpected data types.
`,
    codeSnippet: `
type Status =
  "OPEN"
  | "CLOSED";
`,
    realWorldScenario: `
In enterprise applications with hundreds of API models, TypeScript prevents many runtime failures through compile-time validation.
`,
  },

  {
    question: "What is JWT?",
    answer: `
JWT (JSON Web Token) is a compact token format used for authentication and authorization.

JWT consists of:

• Header
• Payload
• Signature

After successful login, the server generates a JWT that is sent to the client.

The client includes the token in subsequent requests for authentication.
`,
    codeSnippet: `
Authorization:
Bearer token
`,
    realWorldScenario: `
A React application authenticating users against Spring Boot APIs using JWT-based security.
`,
  },

  {
    question: "How does JWT work?",
    answer: `
The typical JWT flow is:

1. User logs in.
2. Server validates credentials.
3. Server creates JWT.
4. Client stores JWT.
5. Client sends JWT with requests.
6. Server validates token.
7. Access is granted if valid.

Because JWT is stateless, servers do not need to maintain session information.
`,
    codeSnippet: `
jwt.sign(
  payload,
  secretKey
);
`,
    realWorldScenario: `
Single Sign-On (SSO) systems often use JWT to authenticate users across multiple applications.
`,
  },

  {
    question: "How to check logs?",
    answer: `
Logs are essential for debugging and monitoring applications.

Frontend logs:
• Browser Console
• Network Tab
• React Developer Tools

Backend logs:
• Application Logs
• Docker Logs
• Cloud Monitoring Services

Production systems often use centralized log management solutions such as ELK Stack or Splunk.
`,
    codeSnippet: `
console.log(user);
`,
    realWorldScenario: `
Investigating production defects by tracing API requests across frontend and backend logs.
`,
  },

  {
    question: "What is Middleware?",
    answer: `
Middleware is software that executes between the request and the final response.

Middleware is commonly used for:

• Authentication
• Authorization
• Logging
• Error Handling
• Request Validation

Each middleware can modify the request, response, or pass control to the next middleware.
`,
    codeSnippet: `
app.use(
  authMiddleware
);
`,
    realWorldScenario: `
A middleware validates JWT tokens before allowing users to access protected APIs.
`,
  },

  {
    question: "What is an Interceptor?",
    answer: `
An interceptor intercepts requests or responses before they reach the application code.

Common interceptor uses:

• Adding JWT tokens
• Logging requests
• Error handling
• Response transformation

Axios interceptors are extremely common in React applications.
`,
    codeSnippet: `
axios.interceptors.request.use(
  config => {
    config.headers.Authorization =
      token;

    return config;
  }
);
`,
    realWorldScenario: `
Automatically attaching JWT tokens to every API request without duplicating code in multiple services.
`,
  },
  {
    question: "What is useMemo?",

    answer: `
useMemo is a React Hook used to memoize expensive calculations.

Whenever a component re-renders, all code inside the component executes again. If a calculation is expensive, it can impact performance.

useMemo caches the result and recomputes it only when dependencies change.

It should be used for expensive operations, not simple calculations. Overusing useMemo can actually hurt performance because React must maintain the cache.
`,

    codeSnippet: `
const filteredUsers = useMemo(
  () =>
    users.filter(
      user =>
        user.active
    ),
  [users]
);
`,

    realWorldScenario: `
An admin dashboard filters 10,000 employee records. Using useMemo prevents expensive filtering logic from executing on every render.
`
  },

  {
    question: "Difference between useMemo and useCallback?",

    answer: `
Both Hooks are optimization Hooks.

useMemo memoizes a value.

useCallback memoizes a function.

If you want to cache a calculated result, use useMemo.

If you want to cache a function reference, use useCallback.

Interviewers frequently check whether candidates understand this distinction because people often confuse the two Hooks.
`,

    codeSnippet: `
const total =
  useMemo(
    () =>
      calculateTotal(
        products
      ),
    [products]
  );

const saveUser =
  useCallback(
    () => {
      api.save();
    },
    []
  );
`,

    realWorldScenario: `
useMemo is often used for dashboard calculations while useCallback is commonly used when passing functions to memoized child components.
`
  },

  {
    question: "What is useContext?",

    answer: `
useContext is a Hook that allows components to consume values from React Context.

Instead of passing props through multiple layers of components, Context allows data sharing across the component tree.

It simplifies global concerns such as themes, authentication data, user preferences, and localization.

useContext only reads Context values. The Context itself is created using createContext.
`,

    codeSnippet: `
const theme =
  useContext(
    ThemeContext
  );
`,

    realWorldScenario: `
A banking portal shares authenticated user data across Header, Sidebar, Dashboard, and Profile pages without prop drilling.
`
  },

  {
    question: "What are Custom Hooks?",

    answer: `
Custom Hooks are reusable JavaScript functions built using React Hooks.

They allow developers to extract and reuse stateful logic across multiple components.

Custom Hooks improve maintainability, reduce duplicate code, and encourage better separation of concerns.

A Custom Hook always starts with the word "use".
`,

    codeSnippet: `
function useUsers() {
  const [users, setUsers] =
    useState([]);

  return users;
}
`,

    realWorldScenario: `
Large enterprise projects commonly create hooks such as useAuth, useApi, usePagination, useDebounce, and usePermissions.
`
  },

  {
    question: "How do you create Custom Hooks?",

    answer: `
Custom Hooks are created by combining existing React Hooks inside a reusable function.

The function name must start with "use" to follow Hook conventions.

A Custom Hook can encapsulate API calls, form handling, authentication logic, pagination, or reusable state management logic.

The goal is to make components smaller and more maintainable.
`,

    codeSnippet: `
function useCounter() {
  const [
    count,
    setCount
  ] = useState(0);

  const increment =
    () =>
      setCount(
        count + 1
      );

  return {
    count,
    increment
  };
}
`,

    realWorldScenario: `
An enterprise application may have dozens of forms. A custom form hook can centralize validation and submission logic.
`
  },

  {
    question: "What are Hook Rules?",

    answer: `
React Hooks follow strict rules.

1. Hooks must be called at the top level.
2. Hooks must not be called inside loops.
3. Hooks must not be called conditionally.
4. Hooks must only be called inside React components or Custom Hooks.

These rules ensure React can correctly track Hook execution order between renders.
`,

    codeSnippet: `
function App() {
  const [
    count,
    setCount
  ] = useState(0);

  return null;
}
`,

    realWorldScenario: `
Violating Hook Rules can create unpredictable bugs and state mismatches that are difficult to debug.
`
  },

  {
    question: "Why should Hooks not be called conditionally?",

    answer: `
React relies on Hook execution order to maintain state.

If Hooks are executed conditionally, the order may change between renders.

React then associates the wrong state with the wrong Hook, causing unpredictable behavior and runtime errors.

This is why Hooks must always execute in exactly the same order.
`,

    codeSnippet: `
if (loggedIn) {
  // ❌ Wrong
  useEffect(() => {});
}
`,

    realWorldScenario: `
A role-based dashboard may accidentally break state tracking if Hooks are placed inside conditional checks.
`
  },

  {
    question: "What is State Lifting?",

    answer: `
State Lifting means moving shared state to the nearest common parent component.

Instead of maintaining duplicate state in multiple child components, the parent manages state and passes data through props.

This ensures all related components stay synchronized.

State Lifting was heavily used before Context API and modern state management libraries became popular.
`,

    codeSnippet: `
function Parent() {
  const [
    value,
    setValue
  ] = useState('');

  return (
    <>
      <Input
        value={value}
      />
      <Preview
        value={value}
      />
    </>
  );
}
`,

    realWorldScenario: `
A search box and search results component share state controlled by a parent component.
`
  },

  {
    question: "What is Prop Drilling?",

    answer: `
Prop Drilling occurs when data is passed through multiple component levels even though intermediate components do not need the data.

It makes components harder to maintain and increases coupling.

Common solutions are:

• Context API
• Redux
• Zustand
• React Query

Prop drilling is a very common React interview question.
`,

    codeSnippet: `
<App user={user}>
  <Layout user={user}>
    <Header user={user} />
  </Layout>
</App>
`,

    realWorldScenario: `
User information passed through five levels of components creates maintenance challenges and readability issues.
`
  },

  {
    question: "Context API vs Redux",

    answer: `
Context API and Redux both help manage shared state.

Context API:
• Built into React
• Simpler
• Good for themes and user data

Redux:
• External library
• Centralized store
• Better debugging
• Middleware support
• Suitable for large applications

For small-to-medium applications, Context API is often sufficient.
For large applications with complex state, Redux is usually preferred.
`,

    codeSnippet: `
const state =
  useSelector(
    state =>
      state.user
  );
`,

    realWorldScenario: `
A large financial application uses Redux while a simple user settings application may only require Context API.
`
  },

  {
    question: "What is Redux Toolkit?",

    answer: `
Redux Toolkit is the official recommended way to use Redux.

It eliminates much of Redux's boilerplate code and provides better developer experience.

Features include:

• createSlice
• configureStore
• createAsyncThunk

Most modern Redux applications use Redux Toolkit instead of traditional Redux.
`,

    codeSnippet: `
const userSlice =
  createSlice({
    name: "user",
    initialState: {},
    reducers: {}
  });
`,

    realWorldScenario: `
Enterprise applications with multiple modules benefit from Redux Toolkit's simplified setup.
`
  },

  {
    question: "What is Redux Thunk?",

    answer: `
Redux Thunk is middleware that allows asynchronous actions in Redux.

Without Thunk, Redux actions must be synchronous.

Thunk enables API calls, delayed actions, and async business logic before updating the store.

It is one of the most commonly used Redux middleware libraries.
`,

    codeSnippet: `
export const fetchUsers =
  () =>
    async dispatch => {
      const data =
        await api.get();

      dispatch(
        setUsers(data)
      );
    };
`,

    realWorldScenario: `
Fetching customers, products, or account information from APIs before updating Redux state.
`
  },

  {
    question: "What is Redux Saga?",

    answer: `
Redux Saga is middleware used to handle complex asynchronous workflows.

It uses generator functions and special saga effects such as:

• takeLatest
• takeEvery
• call
• put

Saga is often used when applications have advanced workflows, background processing, and multiple dependent API calls.
`,

    codeSnippet: `
function* fetchUsers() {
  const users =
    yield call(api);

  yield put(
    setUsers(users)
  );
}
`,

    realWorldScenario: `
Financial applications often use Saga to coordinate complex transaction-processing workflows.
`
  },

  {
    question: "What is Zustand?",

    answer: `
Zustand is a lightweight state management library.

Compared to Redux, it requires significantly less boilerplate.

It provides a simple store API while maintaining excellent performance.

Many teams use Zustand as a modern alternative to Redux for medium-sized applications.
`,

    codeSnippet: `
const useStore =
  create(set => ({
    count: 0
  }));
`,

    realWorldScenario: `
Internal dashboards and admin portals often choose Zustand for simplicity and maintainability.
`
  },

  {
    question: "What is React Query (TanStack Query)?",

    answer: `
TanStack Query is a data-fetching and server-state management library.

It provides:

• Caching
• Background Refetching
• Request Deduplication
• Loading State Handling
• Error Handling

React Query should not be considered a replacement for Redux because it manages server state rather than application state.
`,

    codeSnippet: `
const { data } =
  useQuery({
    queryKey: ["users"],
    queryFn: getUsers
  });
`,

    realWorldScenario: `
A customer management portal automatically keeps data synchronized across multiple pages while minimizing API calls.
`
  },
  {
    question: "What are Container and Presentational Components?",

    answer: `
This pattern separates business logic from UI rendering.

Container Components:
• Handle API calls
• Manage state
• Process business logic

Presentational Components:
• Receive props
• Display UI
• Have minimal logic

This separation improves reusability, maintainability, and testability.

Although Hooks reduced the need for strict Container/Presentational separation, the concept is still widely used in enterprise applications.
`,

    codeSnippet: `
function UsersContainer() {
  const [users, setUsers] =
    useState([]);

  return (
    <UsersView
      users={users}
    />
  );
}
`,

    realWorldScenario: `
A Customer Dashboard fetches data in a Container component, while the UI rendering is delegated to reusable Presentational components.
`
  },

  {
    question: "What are Smart and Dumb Components?",

    answer: `
Smart Components manage state and business logic.

Dumb Components focus only on UI rendering.

Smart Components:
• API calls
• State updates
• Data transformations

Dumb Components:
• Reusable UI
• Receive props
• Emit events

This pattern helps create highly reusable components and reduces duplication.
`,

    codeSnippet: `
function UserCard({
  user
}) {
  return (
    <div>
      {user.name}
    </div>
  );
}
`,

    realWorldScenario: `
A Profile Container loads profile data while reusable components such as UserCard remain unaware of API implementations.
`
  },

  {
    question: "What is Component Composition?",

    answer: `
Component Composition is the practice of building complex components from smaller reusable components.

React strongly encourages composition over inheritance.

Benefits:

• Better reusability
• Easier maintenance
• Cleaner architecture
• Reduced duplication

Modern React applications heavily rely on composition patterns.
`,

    codeSnippet: `
<Card>
  <UserInfo />
</Card>
`,

    realWorldScenario: `
Dashboard layouts are often built from reusable cards, tables, charts, filters, and actions composed together.
`
  },

  {
    question: "What is Render Props Pattern?",

    answer: `
Render Props is a pattern where a component shares functionality using a function prop.

Instead of rendering fixed UI, the component calls a function supplied by its consumer.

Before Hooks became popular, Render Props were commonly used for sharing reusable logic.

Today many Render Prop use cases are implemented using Custom Hooks.
`,

    codeSnippet: `
<DataProvider
  render={(data) => (
    <UserList
      users={data}
    />
  )}
/>
`,

    realWorldScenario: `
Reusable data-fetching components can expose fetched data using Render Props.
`
  },

  {
    question: "What are Compound Components?",

    answer: `
Compound Components work together as a group while sharing internal state.

Examples include:

• Tabs
• Accordion
• Select
• Dropdown

Consumers use the grouped components while the implementation handles state internally.

This creates a flexible API and improves reusability.
`,

    codeSnippet: `
<Tabs>
  <Tabs.List />
  <Tabs.Panel />
</Tabs>
`,

    realWorldScenario: `
UI libraries like Radix UI and Headless UI use Compound Components extensively.
`
  },

  {
    question: "What are Error Boundaries?",

    answer: `
Error Boundaries catch runtime rendering errors in React component trees.

Without Error Boundaries, the entire React tree may crash.

Error Boundaries provide fallback UI and prevent application failure.

They only catch rendering errors and lifecycle errors. They do not catch asynchronous errors or event-handler errors.
`,

    codeSnippet: `
<ErrorBoundary>
  <Dashboard />
</ErrorBoundary>
`,

    realWorldScenario: `
An analytics widget crashes but the remainder of the dashboard continues functioning.
`
  },

  {
    question: "What are React Portals?",

    answer: `
Portals allow rendering a component outside of its parent DOM hierarchy.

They are commonly used for:

• Modals
• Tooltips
• Dialogs
• Notifications

Portals solve z-index and overflow issues while preserving React component relationships.
`,

    codeSnippet: `
createPortal(
  <Modal />,
  document.body
);
`,

    realWorldScenario: `
An application-wide modal should appear above all parent containers regardless of layout structure.
`
  },

  {
    question: "What is Reconciliation?",

    answer: `
Reconciliation is the process React uses to compare the previous Virtual DOM with the new Virtual DOM.

React calculates the minimum set of changes required and updates only affected DOM nodes.

This process improves performance by avoiding unnecessary DOM updates.

Keys play an important role during reconciliation for identifying changed list items.
`,

    codeSnippet: `
users.map(user => (
  <UserCard
    key={user.id}
  />
));
`,

    realWorldScenario: `
A customer grid updates only modified rows instead of re-rendering thousands of records.
`
  },

  {
    question: "What is React Fiber?",

    answer: `
React Fiber is the internal rendering engine introduced to improve scheduling and rendering capabilities.

Fiber enables:

• Incremental rendering
• Concurrent features
• Better responsiveness
• Work prioritization

Fiber allows React to pause and resume work instead of blocking the UI.
`,

    codeSnippet: `
React Fiber is internal
and not directly used
through application code.
`,

    realWorldScenario: `
Large dashboards remain responsive during expensive UI updates because React Fiber prioritizes user interactions.
`
  },

  {
    question: "What is Hydration?",

    answer: `
Hydration occurs when React attaches event handlers to HTML generated on the server.

SSR first sends HTML to the browser.

React then hydrates the page by connecting components to server-rendered markup.

Without hydration, server-rendered pages cannot become interactive.
`,

    codeSnippet: `
hydrateRoot(
  document.getElementById(
    "root"
  ),
  <App />
);
`,

    realWorldScenario: `
Next.js applications rely heavily on hydration to make server-rendered content interactive.
`
  },

  {
    question: "Controlled State vs Global State",

    answer: `
Controlled State belongs to a component or its local hierarchy.

Global State is shared across multiple modules.

Examples of Local State:

• Modal visibility
• Input values
• Dropdown selections

Examples of Global State:

• Authentication
• Theme
• User profile
• Notifications

Choosing the correct scope is important for maintainability.
`,

    codeSnippet: `
const [open, setOpen] =
  useState(false);
`,

    realWorldScenario: `
Authentication state is global while modal visibility remains local to a page.
`
  },

  {
    question: "What is a good React folder structure?",

    answer: `
A scalable React folder structure should separate concerns and support growth.

Common organization:

• components
• pages
• hooks
• services
• utils
• types
• store

The ideal structure depends on team size and project complexity.

Feature-based organization is popular in enterprise applications.
`,

    codeSnippet: `
src/
  components/
  pages/
  hooks/
  services/
  store/
`,

    realWorldScenario: `
Large enterprise applications with dozens of modules use feature-based folder structures to improve maintainability.
`
  },

  {
    question: "How do SOLID principles apply to React?",

    answer: `
SOLID principles improve code quality and maintainability.

Examples in React:

• Single Responsibility
  - One component, one responsibility

• Open/Closed
  - Extend behavior using composition

• Interface Segregation
  - Small focused props

• Dependency Inversion
  - Inject services and APIs

Applying SOLID principles reduces technical debt and improves scalability.
`,

    codeSnippet: `
<UserCard
  user={user}
/>
`,

    realWorldScenario: `
A large application with hundreds of reusable components remains maintainable because responsibilities are properly separated.
`
  },

  {
    question: "What are Micro Frontends?",

    answer: `
Micro Frontends extend the microservices idea to frontend development.

Instead of one large frontend application, multiple teams independently develop and deploy smaller frontend modules.

Benefits:

• Independent deployment
• Team autonomy
• Improved scalability

Challenges:

• Shared dependencies
• Routing
• Communication between modules
`,
    codeSnippet: `
Shell App
  ├── Orders
  ├── Accounts
  └── Reports
`,

    realWorldScenario: `
Large organizations often allow separate teams to own Billing, Reporting, and Customer modules independently.
`
  },

  {
    question: "What is Module Federation?",

    answer: `
Module Federation is a Webpack feature that allows applications to load modules from other applications at runtime.

It is one of the most popular implementations of Micro Frontends.

Benefits:

• Independent deployments
• Shared code
• Flexible architecture

Module Federation enables teams to deliver features independently while maintaining a unified application experience.
`,
    codeSnippet: `
remotes: {
  reports:
    "reports@url"
}
`,

    realWorldScenario: `
A banking application loads Reporting, Payments, and Investments as separate deployable frontend modules.
`
  },
  {
    question: "Interface vs Type in TypeScript?",

    answer: `
Both interface and type are used to define custom types in TypeScript.

Interface:
• Best for object definitions
• Supports declaration merging
• Preferred for API contracts and component props

Type:
• Supports unions
• Supports intersections
• More flexible for advanced typing

In most React applications, interfaces are commonly used for props and API models, while types are often used for unions and utility typing.

In interviews, mention that both are very similar for basic object definitions.
`,

    codeSnippet: `
interface User {
  id: number;
  name: string;
}

type Status =
  "ACTIVE" |
  "INACTIVE";
`,

    realWorldScenario: `
Large enterprise applications use interfaces for API contracts and types for status values, permissions, and unions.
`
  },

  {
    question: "What are Generics in TypeScript?",

    answer: `
Generics allow components, functions, and classes to work with multiple data types while maintaining type safety.

Instead of creating separate implementations for different types, generics create reusable code.

Generics are heavily used in React Query, Axios responses, reusable tables, hooks, and utility functions.
`,

    codeSnippet: `
function identity<T>(
  value: T
): T {
  return value;
}
`,

    realWorldScenario: `
Reusable DataTable components often use generics to display any type of API response without losing type safety.
`
  },

  {
    question: "What are Utility Types in TypeScript?",

    answer: `
Utility Types help transform existing types.

Common Utility Types:

• Partial<T>
• Required<T>
• Pick<T>
• Omit<T>
• Readonly<T>
• Record<K,V>

These improve maintainability and reduce duplicate type definitions.

Most enterprise TypeScript applications use utility types extensively.
`,

    codeSnippet: `
interface User {
  id: number;
  name: string;
}

type UserUpdate =
  Partial<User>;
`,

    realWorldScenario: `
Update profile APIs usually require only a subset of fields, making Partial<T> extremely useful.
`
  },

  {
    question: "Should we use React.FC or normal functions?",

    answer: `
Modern React projects generally prefer normal functions instead of React.FC.

Benefits of normal functions:

• Simpler typing
• Better readability
• Explicit children handling
• Fewer TypeScript surprises

While React.FC still works, many teams avoid it as a coding standard.
`,

    codeSnippet: `
interface Props {
  name: string;
}

function UserCard(
  props: Props
) {
  return (
    <div>
      {props.name}
    </div>
  );
}
`,

    realWorldScenario: `
Most modern enterprise React codebases written in TypeScript use standard functions instead of React.FC.
`
  },

  {
    question: "How do you create Type-safe APIs in React?",

    answer: `
Type-safe APIs ensure frontend and backend contracts remain synchronized.

Benefits:

• Compile-time validation
• Auto-completion
• Fewer runtime errors
• Better refactoring support

Usually achieved using TypeScript interfaces together with Axios or Fetch wrappers.
`,

    codeSnippet: `
interface User {
  id: number;
  name: string;
}

const users =
  await axios.get<
    User[]
  >("/users");
`,

    realWorldScenario: `
Frontend and Spring Boot teams share API contracts, reducing integration defects dramatically.
`
  },

  {
    question: "What is Jest?",

    answer: `
Jest is a JavaScript testing framework developed by Meta.

Features:

• Fast execution
• Mocking support
• Snapshot testing
• Code coverage reporting

Jest is commonly used together with React Testing Library for React projects.
`,

    codeSnippet: `
test(
  "adds numbers",
  () => {
    expect(
      1 + 1
    ).toBe(2);
  }
);
`,

    realWorldScenario: `
Automated testing pipelines often execute hundreds of Jest tests before deployment.
`
  },

  {
    question: "What is React Testing Library?",

    answer: `
React Testing Library focuses on testing user behavior rather than implementation details.

Instead of testing component internals, it encourages testing how users interact with the application.

This results in reliable and maintainable tests.
`,

    codeSnippet: `
render(
  <Login />
);

screen.getByText(
  "Login"
);
`,

    realWorldScenario: `
Testing login pages, registration forms, and dashboards using actual user workflows.
`
  },

  {
    question: "How do you mock APIs in tests?",

    answer: `
API mocking isolates tests from real backend systems.

Benefits:

• Faster execution
• Stable tests
• No dependency on external APIs

Common approaches:

• Jest Mock
• Mock Service Worker (MSW)
• Axios Mocks
`,
    codeSnippet: `
jest.mock(
  "./api"
);
`,

    realWorldScenario: `
Testing frontend components while backend services are unavailable.
`
  },

  {
    question: "What is Unit Testing?",

    answer: `
Unit Testing verifies individual functions or components in isolation.

The goal is ensuring a small piece of code behaves correctly.

Unit tests are fast, focused, and easy to maintain.

Examples:

• Utility functions
• Hooks
• Small components
`,
    codeSnippet: `
expect(
  add(2,3)
).toBe(5);
`,

    realWorldScenario: `
Testing validation logic before integrating it into larger forms.
`
  },

  {
    question: "What is Integration Testing?",

    answer: `
Integration Testing verifies that multiple components work correctly together.

It tests interactions between modules rather than a single isolated function.

Examples:

• Form submission
• API integration
• Authentication flow
`,
    codeSnippet: `
render(
  <LoginForm />
);

fireEvent.click(
  loginButton
);
`,

    realWorldScenario: `
Testing the interaction between Login Form, API Service, and Redux Store.
`
  },

  {
    question: "What is End-to-End (E2E) Testing?",

    answer: `
End-to-End Testing validates complete user workflows in a running application.

Examples:

• Login
• Checkout
• Registration
• Payments

These tests provide the highest confidence but are slower than unit tests.
`,
    codeSnippet: `
cy.visit("/login");

cy.get("#submit")
  .click();
`,

    realWorldScenario: `
Verifying complete customer purchase journeys before production releases.
`
  },

  {
    question: "What is Cypress?",

    answer: `
Cypress is a modern End-to-End testing framework.

Features:

• Real browser testing
• Excellent debugging
• Fast setup
• Screenshots
• Video recording

Cypress is widely adopted in React projects.
`,

    codeSnippet: `
cy.visit("/");

cy.contains(
  "Login"
);
`,

    realWorldScenario: `
Ensuring business-critical workflows function correctly after every deployment.
`
  },

  {
    question: "What is Vitest?",

    answer: `
Vitest is a fast modern testing framework built for Vite applications.

Benefits:

• Faster execution
• Better Vite integration
• Similar API to Jest

Many modern React + Vite applications now prefer Vitest.
`,
    codeSnippet: `
import {
  describe,
  it,
  expect
} from "vitest";
`,

    realWorldScenario: `
Used in Vite-based enterprise applications to reduce testing execution time.
`
  },

  {
    question: "How do you test Custom Hooks?",

    answer: `
Custom Hooks should be tested independently of UI whenever possible.

Testing verifies:

• Initial state
• State updates
• Async behavior
• Side effects

This ensures reusable Hook logic remains stable.
`,
    codeSnippet: `
const {
  result
} = renderHook(
  () => useCounter()
);
`,

    realWorldScenario: `
Testing reusable hooks such as useAuth, useDebounce, useApi, and usePagination.
`
  },

  {
    question: "How do you test Context API?",

    answer: `
Context testing verifies components correctly consume provided context values.

Typically, components are rendered inside a Provider during tests.

Tests should validate rendering behavior and state changes.
`,
    codeSnippet: `
render(
  <ThemeProvider>
    <Header />
  </ThemeProvider>
);
`,

    realWorldScenario: `
Testing language switching, authentication state, and themes provided through Context API.
`
  },
  {
    question:
      "How would you optimize a page rendering 10,000 rows?",

    answer: `
Rendering thousands of DOM elements can significantly impact performance.

I would use a combination of:

• List Virtualization (react-window)
• Pagination
• Lazy Loading
• React.memo
• useMemo
• Proper keys

The most effective solution is usually virtualization because only the visible rows are rendered, dramatically reducing DOM nodes and rendering cost.

I would also profile the application using React DevTools before making optimization decisions.
`,

    codeSnippet: `
<FixedSizeList
  height={600}
  itemCount={10000}
  itemSize={35}
>
  {Row}
</FixedSizeList>
`,

    realWorldScenario: `
An employee-management dashboard displaying 50,000 records became slow. Virtualization reduced render time and memory consumption significantly.
`
  },

  {
    question:
      "User types in a search box and API gets called 100 times. How would you fix it?",

    answer: `
This issue occurs because an API request is triggered on every keystroke.

I would implement:

• Debouncing
• Request cancellation
• Caching
• React Query

Debouncing ensures API calls occur only after the user stops typing for a short period.

This reduces server load and improves user experience.
`,

    codeSnippet: `
const debouncedSearch =
  useMemo(
    () =>
      debounce(
        searchUsers,
        500
      ),
    []
  );
`,

    realWorldScenario: `
An enterprise user search page reduced thousands of unnecessary API calls after implementing debouncing.
`
  },

  {
    question:
      "How would you prevent unnecessary re-renders?",

    answer: `
I would first identify the cause using React DevTools Profiler.

Common techniques:

• React.memo
• useMemo
• useCallback
• Splitting components
• Avoiding unnecessary state updates

Optimization should only be applied after finding an actual bottleneck.
`,

    codeSnippet: `
export default React.memo(
  UserCard
);
`,

    realWorldScenario: `
A dashboard widget was re-rendering whenever unrelated state changed. React.memo reduced unnecessary rendering work.
`
  },

  {
    question:
      "How would you implement role-based access control in React?",

    answer: `
Role-based access restricts content based on user permissions.

Typically:

1. User logs in.
2. JWT contains roles.
3. Roles are stored in Context or Redux.
4. ProtectedRoute verifies permissions.

Both frontend and backend should validate roles for proper security.
`,

    codeSnippet: `
if (
  user.role !== "ADMIN"
) {
  return <Navigate to='/' />;
}
`,

    realWorldScenario: `
Admin pages should not be available to standard users even if the URL is manually entered.
`
  },

  {
    question:
      "How would you implement JWT refresh token flow?",

    answer: `
Access tokens are usually short-lived.

When an access token expires:

1. API returns 401.
2. Client sends refresh token.
3. Server issues new access token.
4. Original request is retried.

Axios interceptors are commonly used for implementing this workflow.
`,

    codeSnippet: `
axios.interceptors.response.use(
  response => response,
  refreshTokenHandler
);
`,

    realWorldScenario: `
Banking and insurance portals often use refresh token mechanisms to maintain session security.
`
  },

  {
    question:
      "How would you secure frontend routes?",

    answer: `
Frontend routes should be protected using authentication and authorization checks.

Typical approach:

• JWT validation
• ProtectedRoute component
• Role validation
• Backend verification

Never rely only on frontend route protection because users can manipulate client-side code.
`,

    codeSnippet: `
<Route
  path='/admin'
  element={
    <ProtectedRoute>
      <Admin />
    </ProtectedRoute>
  }
/>
`,

    realWorldScenario: `
HR management portals often expose sensitive employee information that must remain protected.
`
  },

  {
    question:
      "How would you handle API failures globally?",

    answer: `
Centralized error handling improves maintainability.

Common approaches:

• Axios interceptors
• Global error boundary
• Notification system
• Logging

This prevents duplicate error-handling logic in every component.
`,

    codeSnippet: `
axios.interceptors.response.use(
  response => response,
  error => {
    showToast();
    return Promise.reject(error);
  }
);
`,

    realWorldScenario: `
Enterprise applications often display consistent notifications whenever APIs fail.
`
  },

  {
    question:
      "How would you implement dark mode?",

    answer: `
Dark mode can be implemented using:

• Context API
• CSS variables
• Tailwind dark mode
• Local storage

The theme preference should persist between sessions.
`,

    codeSnippet: `
const ThemeContext =
  createContext();

document.body.classList
  .toggle("dark");
`,

    realWorldScenario: `
Many enterprise dashboards support both light and dark themes for accessibility and user preference.
`
  },

  {
    question:
      "How would you design reusable forms?",

    answer: `
Reusable forms are usually built using:

• React Hook Form
• Formik
• Custom Hook abstractions
• Reusable Field components

Validation logic should be centralized and configurable.
`,

    codeSnippet: `
<InputField
  name="email"
  label="Email"
/>
`,

    realWorldScenario: `
A customer onboarding application can reuse the same form components across registration, profile update, and account settings pages.
`
  },

  {
    question:
      "How would you handle large file uploads?",

    answer: `
Large uploads require:

• Chunked uploads
• Progress tracking
• Validation
• Retry mechanisms

Files should be uploaded in pieces instead of a single request for reliability.
`,

    codeSnippet: `
const formData =
  new FormData();

formData.append(
  "file",
  file
);
`,

    realWorldScenario: `
Document-management systems commonly upload files larger than 100 MB and require progress indicators.
`
  },

  {
    question:
      "How would you implement infinite scrolling?",

    answer: `
Infinite scrolling loads new data as users approach the bottom of the page.

Implementation options:

• Intersection Observer
• React Query
• Virtualized Lists

It should include loading indicators and pagination support.
`,

    codeSnippet: `
const observer =
  new IntersectionObserver(
    callback
  );
`,

    realWorldScenario: `
Social media feeds and product catalogs frequently use infinite scrolling.
`
  },

  {
    question:
      "How would you optimize bundle size?",

    answer: `
Bundle optimization techniques include:

• Code Splitting
• Lazy Loading
• Tree Shaking
• Dynamic Imports
• Removing unused libraries

Bundle analyzers can identify oversized dependencies.
`,

    codeSnippet: `
const Reports =
  lazy(
    () =>
      import(
        "./Reports"
      )
  );
`,

    realWorldScenario: `
A reporting module used by only a small group of users should not increase the initial application bundle.
`
  },

  {
    question:
      "How would you cache API responses?",

    answer: `
Caching reduces network calls and improves responsiveness.

Common approaches:

• React Query
• Browser Cache
• Local Storage
• Session Storage

Caching strategies should account for data freshness.
`,

    codeSnippet: `
useQuery({
  queryKey: ["users"],
  queryFn: getUsers
});
`,

    realWorldScenario: `
Customer profile data often remains cached to reduce repeated API requests.
`
  },

  {
    question:
      "How would you detect memory leaks in React?",

    answer: `
Memory leaks commonly occur when resources are not cleaned up.

Examples:

• Unremoved event listeners
• Active timers
• WebSocket connections
• Uncancelled API requests

Cleanup functions inside useEffect help prevent leaks.
`,

    codeSnippet: `
useEffect(() => {
  const id =
    setInterval(
      fn,
      1000
    );

  return () =>
    clearInterval(id);
}, []);
`,

    realWorldScenario: `
Long-running dashboard screens can consume increasing memory if subscriptions are not cleaned up properly.
`
  },

  {
    question:
      "How would you debug production issues?",

    answer: `
I usually follow a systematic approach:

1. Check logs.
2. Review monitoring dashboards.
3. Inspect network requests.
4. Reproduce the issue locally.
5. Use source maps.
6. Investigate recent deployments.

Tools:

• Browser DevTools
• Application Logs
• Sentry
• Datadog
• Splunk

A structured debugging process is critical in production environments.
`,

    codeSnippet: `
try {
  await api.get();
}
catch(error) {
  logger.error(error);
}
`,

    realWorldScenario: `
A production issue impacting customer payments was traced through centralized logs and monitoring tools.
`
  },
  {
    question: "How would you design a large-scale React application?",

    answer: `
For large-scale React applications, I focus on scalability, maintainability, performance, and team collaboration.

Typical architecture includes:

• Feature-based folder structure
• Shared component library
• API service layer
• State management strategy
• Route-based code splitting
• TypeScript
• Centralized error handling
• Testing strategy

The goal is to ensure that multiple teams can develop features independently without creating tight coupling between modules.
`,

    codeSnippet: `
src/
 ├── features/
 ├── pages/
 ├── shared/
 ├── services/
 ├── hooks/
 ├── types/
 └── store/
`,

    realWorldScenario: `
A banking application containing Accounts, Loans, Transactions and Reports modules uses feature-based architecture to keep development manageable.
`
  },

  {
    question: "How would you architect state management in a large application?",

    answer: `
Not all state belongs in Redux or Context.

I usually categorize state into:

• Local UI State
• Shared Client State
• Server State

Local UI State:
useState

Shared State:
Redux / Zustand

Server State:
React Query

Choosing the correct state location prevents unnecessary complexity and improves performance.
`,

    codeSnippet: `
UI State:
useState()

Global State:
Redux

Server State:
React Query
`,

    realWorldScenario: `
A customer portal stores authentication globally in Redux while customer lists are managed through React Query.
`
  },

  {
    question: "How would you design a reusable component library?",

    answer: `
A reusable component library reduces duplication and improves consistency.

Important considerations:

• Accessibility
• Theming
• TypeScript support
• Documentation
• Storybook
• Unit testing

Components should remain business-agnostic and configurable through props.
`,

    codeSnippet: `
<Button
  variant="primary"
  size="medium"
/>
`,

    realWorldScenario: `
Large organizations often maintain a Design System used across multiple applications.
`
  },

  {
    question: "How would you implement Micro Frontends?",

    answer: `
Micro Frontends split a large frontend into independently deployable modules.

Each team owns a feature area.

Typical architecture:

Shell App
  ├ Projects
  ├ Reports
  └ Billing

Benefits:

• Independent deployment
• Team autonomy
• Faster delivery

Challenges include dependency sharing and cross-module communication.
`,

    codeSnippet: `
Shell
 ├ Billing App
 ├ Reports App
 └ Accounts App
`,

    realWorldScenario: `
Different banking teams can independently deploy Investment, Credit Card and Transaction modules.
`
  },

  {
    question: "How would you design a dashboard handling millions of records?",

    answer: `
Rendering millions of records directly is impossible.

I would use:

• Pagination
• Server-side filtering
• Virtualization
• Caching
• React Query
• Lazy loading

Only the required data should be fetched and rendered.
`,

    codeSnippet: `
query?page=1
&size=50
&sort=name
`,

    realWorldScenario: `
A transaction monitoring system displaying millions of financial records uses pagination and virtualization to remain responsive.
`
  },

  {
    question: "How would you design authentication for a React application?",

    answer: `
Authentication typically includes:

• Login
• JWT
• Refresh Token
• Route Guards
• Role-based Access

Authentication state should be centralized and protected against token expiration issues.

The backend remains the final authority for authorization decisions.
`,

    codeSnippet: `
Authorization:
Bearer token
`,

    realWorldScenario: `
Enterprise portals often support multiple roles such as Admin, Manager and User with different permissions.
`
  },

  {
    question: "How would you handle API communication across the application?",

    answer: `
I usually build a dedicated API service layer.

Benefits:

• Centralized configuration
• Shared interceptors
• Error handling
• Authentication
• Logging

Components never directly contain networking logic.
`,

    codeSnippet: `
api/
 ├ authApi.ts
 ├ userApi.ts
 └ reportApi.ts
`,

    realWorldScenario: `
Changing API authentication logic in one place updates behavior across the entire application.
`
  },

  {
    question: "How would you design frontend error handling?",

    answer: `
Error handling should occur at multiple levels:

• Component level
• API level
• Global Error Boundary
• Monitoring tools

Users should receive friendly messages while developers receive technical details.
`,

    codeSnippet: `
<ErrorBoundary>
  <Dashboard />
</ErrorBoundary>
`,

    realWorldScenario: `
An analytics widget fails while the remaining dashboard continues functioning normally.
`
  },

  {
    question: "How would you improve application performance?",

    answer: `
Performance improvements include:

• Code Splitting
• Lazy Loading
• React.memo
• useMemo
• useCallback
• Virtualization
• Bundle Analysis

Optimization should always be driven by profiling and metrics instead of assumptions.
`,

    codeSnippet: `
const Reports = lazy(
  () => import("./Reports")
);
`,

    realWorldScenario: `
Reducing initial bundle size from 8 MB to 2 MB dramatically improved loading speed.
`
  },

  {
    question: "How would you design a frontend caching strategy?",

    answer: `
Caching reduces network traffic and improves responsiveness.

Common approaches:

• React Query Cache
• Browser Cache
• Local Storage
• Session Storage

Cache invalidation should be carefully managed to avoid stale data.
`,

    codeSnippet: `
useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers
});
`,

    realWorldScenario: `
Customer profile information can be cached while frequently-changing transactions are refetched.
`
  },

  {
    question: "How would you design file upload architecture?",

    answer: `
File uploads should support:

• Validation
• Progress tracking
• Retry handling
• Chunk uploads
• Virus scanning

Large files should never be uploaded in a single request.
`,

    codeSnippet: `
const formData =
  new FormData();

formData.append(
  "file",
  file
);
`,

    realWorldScenario: `
Insurance applications often upload large policy documents requiring chunk-based uploads.
`
  },

  {
    question: "How would you maintain frontend security?",

    answer: `
Frontend security best practices include:

• Input validation
• JWT security
• HTTPS
• Route protection
• Secure Storage
• Content Security Policy

Frontend should not trust any client-side data and all critical validation should also exist on the backend.
`,

    codeSnippet: `
if (
  !token
) {
  navigate("/login");
}
`,

    realWorldScenario: `
Financial applications require multiple security layers to protect sensitive customer information.
`
  },

  {
    question: "How would you monitor a React application in production?",

    answer: `
Production monitoring usually includes:

• Error Tracking
• Performance Monitoring
• Logging
• User Analytics

Popular tools:

• Sentry
• Datadog
• New Relic
• Splunk

Monitoring helps identify issues before customers report them.
`,

    codeSnippet: `
Sentry.captureException(
  error
);
`,

    realWorldScenario: `
Production monitoring detected increased API failures after deployment and enabled rapid rollback.
`
  },

  {
    question: "How would you design a highly scalable frontend architecture?",

    answer: `
Scalable frontend architecture requires:

• Module isolation
• Shared design system
• CI/CD pipelines
• Feature ownership
• Proper state management
• Testing automation

Architecture decisions should support growth in users, developers, and features.
`,

    codeSnippet: `
Apps
 ├ Customers
 ├ Reports
 ├ Payments
 └ Shared UI
`,

    realWorldScenario: `
A multinational organization supports dozens of frontend teams using a shared architecture and component platform.
`
  },

  {
    question: "How would you explain frontend system design in an interview?",

    answer: `
Follow this structure:

1. Clarify requirements
2. Identify users
3. Define architecture
4. Discuss state management
5. Explain API design
6. Cover security
7. Cover scalability
8. Cover performance
9. Cover monitoring
10. Mention trade-offs

Interviewers are usually more interested in your reasoning than a single perfect solution.
`,

    codeSnippet: `
Requirements
   ↓
Architecture
   ↓
Implementation
   ↓
Optimization
`,

    realWorldScenario: `
This structure works for dashboard design, e-commerce systems, CRM platforms, and enterprise portals.
`
  },
  {
    question: "What are React 19 Actions?",

    answer: `
Actions are a React 19 feature that simplify handling asynchronous operations such as form submissions and data mutations.

Traditionally developers had to manually manage loading state, success state, and error state. Actions provide a more structured approach to managing async workflows.

Actions integrate well with forms and server-side operations, reducing boilerplate code.

They improve developer productivity by making async state transitions easier to manage and reason about.
`,

    codeSnippet: `
async function saveUser(
  formData
) {
  "use server";

  await createUser(
    formData
  );
}
`,

    realWorldScenario: `
In a user registration screen, Actions can handle form submission, validation, loading state, and server communication with much less code.
`
  },

  {
    question: "What is the use() API?",

    answer: `
The use() API allows React components to directly consume promises and context values.

Instead of manually handling loading states using useEffect and useState, React can suspend rendering until the promise resolves.

The use() API works particularly well with Server Components and Suspense.

This simplifies data fetching logic and reduces component complexity.
`,

    codeSnippet: `
const users = use(
  fetchUsers()
);
`,

    realWorldScenario: `
A reporting page can directly read data from an asynchronous source without maintaining separate loading and data states.
`
  },

  {
    question: "What is useOptimistic()?",

    answer: `
useOptimistic helps create optimistic user interfaces.

The UI updates immediately before the server confirms success.

If the operation succeeds, the optimistic change remains.
If it fails, React can roll back the change.

This improves perceived performance and user experience.
`,

    codeSnippet: `
const [
  optimisticTodos,
  addTodo
] = useOptimistic(
  todos
);
`,

    realWorldScenario: `
Social media likes, comments, and reactions often update instantly before receiving server confirmation.
`
  },

  {
    question: "What is Optimistic UI?",

    answer: `
Optimistic UI is a design pattern where the interface assumes a successful server response and updates immediately.

Instead of waiting for an API response, the UI changes instantly.

Benefits:

• Faster perceived performance
• Better user experience
• Reduced waiting

If the request fails, the application can roll back the changes.
`,

    codeSnippet: `
setLikes(
  likes + 1
);

// then call API
`,
    realWorldScenario: `
E-commerce carts, likes, comments, and favorites commonly use optimistic updates.
`
  },

  {
    question: "What is useActionState()?",

    answer: `
useActionState simplifies managing form actions and asynchronous state transitions.

It automatically tracks action state and updates UI accordingly.

Developers no longer need to manually create multiple loading and error state variables.

It integrates naturally with React 19 Actions and form handling.
`,

    codeSnippet: `
const [
  state,
  submitAction
] = useActionState(
  saveUser,
  initialState
);
`,

    realWorldScenario: `
A profile update form tracks submission progress and response status without multiple useState declarations.
`
  },

  {
    question: "What is useFormStatus()?",

    answer: `
useFormStatus allows components to determine whether a form submission is currently pending.

It is mainly used to display loading indicators, disable buttons, and provide visual feedback during submissions.

This reduces the amount of manual state management required for forms.
`,

    codeSnippet: `
const {
  pending
} = useFormStatus();
`,
    realWorldScenario: `
A registration form disables the Submit button while processing a request.
`
  },

  {
    question: "How does React 19 improve forms?",

    answer: `
React 19 introduces significant improvements for form handling.

Features include:

• Actions
• useActionState
• useFormStatus
• Server Actions integration

These features reduce boilerplate and simplify handling validations, loading states, and submissions.

React forms become more declarative and easier to maintain.
`,

    codeSnippet: `
<form action={createUser}>
  <button>
    Save
  </button>
</form>
`,
    realWorldScenario: `
Enterprise onboarding forms become easier to implement and maintain using built-in React form capabilities.
`
  },

  {
    question: "What are React Server Actions?",

    answer: `
Server Actions allow client components to invoke server-side logic directly.

Instead of creating dedicated REST endpoints for every operation, developers can execute server-side functions from forms or UI interactions.

Benefits:

• Less boilerplate
• Simplified architecture
• Tighter integration between UI and backend logic
`,

    codeSnippet: `
"use server";

export async function
createOrder() {
  // save order
}
`,
    realWorldScenario: `
An order creation form directly calls server-side business logic without creating a separate API controller.
`
  },

  {
    question: "What is the React Compiler?",

    answer: `
The React Compiler is designed to automatically optimize React applications.

Its goal is to reduce the need for manual optimization techniques such as:

• useMemo
• useCallback
• React.memo

The compiler analyzes component behavior and applies optimizations automatically where possible.

This allows developers to focus more on business logic rather than performance tuning.
`,

    codeSnippet: `
function UserCard() {
  return <div>User</div>;
}
`,
    realWorldScenario: `
Large applications may achieve performance improvements without requiring developers to manually apply memoization everywhere.
`
  },

  {
    question: "How does React 19 improve performance?",

    answer: `
React 19 introduces several improvements:

• Better asynchronous rendering
• Improved form handling
• Optimistic updates
• Enhanced Server Components support
• React Compiler optimizations

These features improve both developer productivity and user experience.

Modern React applications become faster and easier to maintain.
`,

    codeSnippet: `
const [
  optimisticData,
  updateData
] = useOptimistic(
  data
);
`,
    realWorldScenario: `
Large enterprise applications benefit from reduced code complexity and better responsiveness.
`
  },

  {
    question: "What are the major differences between React 18 and React 19?",

    answer: `
React 18 introduced:

• Concurrent Rendering
• Suspense improvements
• useTransition

React 19 expands on those features and adds:

• Actions
• useOptimistic
• useActionState
• useFormStatus
• Enhanced Server Components support
• React Compiler initiative

React 19 focuses heavily on simplifying async operations and reducing boilerplate.
`,

    codeSnippet: `
React 18
   ↓
React 19
   ↓
Actions & Optimistic UI
`,
    realWorldScenario: `
Teams migrating from React 18 can reduce custom form and loading-state management code using React 19 features.
`
  },

  {
    question: "How should you prepare for React 19 interview questions?",

    answer: `
Interviewers typically focus on:

• Actions
• use()
• useOptimistic()
• useActionState()
• useFormStatus()
• Server Actions
• React Compiler

When answering, explain not only what the feature does but also why it was introduced and which problems it solves.

Real-world examples are often more important than memorizing API signatures.
`,

    codeSnippet: `
Actions
use()
useOptimistic()
useFormStatus()
`,
    realWorldScenario: `
Senior frontend interviews increasingly expect awareness of modern React features and future React architecture trends.
`
  }
];
