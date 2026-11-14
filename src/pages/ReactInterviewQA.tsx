import { qaData } from "../data/reactInterviewQAData";

export default function ReactInterviewQA() {
  return (
    <div className="max-w-7xl mx-auto">

      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3">
          React Interview Questions & Answers
        </h1>

        <p className="text-slate-600 text-lg">
          Complete React interview preparation guide with
          explanations, code snippets and real-world project
          scenarios.
        </p>
      </div>

      <div className="space-y-8">
        {qaData.map((item, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-2xl
              shadow-md
              border
              overflow-hidden
            "
          >
            {/* Question Header */}

            <div
              className="
                bg-gradient-to-r
                from-blue-50
                to-indigo-50
                border-b
                px-6
                py-5
              "
            >
              <h2
                className="
                  text-xl
                  md:text-2xl
                  font-bold
                  text-blue-700
                "
              >
                Q{index + 1}. {item.question}
              </h2>
            </div>

            {/* Content */}

            <div className="p-6">

              {/* Answer */}

              <div>
                <h3
                  className="
                    text-lg
                    font-semibold
                    text-slate-800
                    mb-3
                  "
                >
                  ✅ Answer
                </h3>

                <p
                  className="
                    text-slate-700
                    leading-8
                  "
                >
                  {item.answer}
                </p>
              </div>

              {/* Code Example */}

              {item.codeSnippet && (
                <div className="mt-6">

                  <h3
                    className="
                      text-lg
                      font-semibold
                      mb-3
                    "
                  >
                    💻 Code Example
                  </h3>

                  <pre
                    className="
                      bg-slate-900
                      text-green-400
                      rounded-xl
                      p-4
                      overflow-x-auto
                      text-sm
                    "
                  >
                    <code>
                      {item.codeSnippet}
                    </code>
                  </pre>

                </div>
              )}

              {/* Real World Scenario */}

              {item.realWorldScenario && (
                <div
                  className="
                    mt-6
                    bg-green-50
                    border-l-4
                    border-green-500
                    p-5
                    rounded-r-lg
                  "
                >
                  <h3
                    className="
                      font-semibold
                      text-green-700
                      mb-2
                    "
                  >
                    🚀 Real Project Scenario
                  </h3>

                  <p
                    className="
                      text-slate-700
                      leading-7
                    "
                  >
                    {item.realWorldScenario}
                  </p>
                </div>
              )}

            </div>
          </div>
        ))}
      </div>

      {/* Footer Block */}

      <div
        className="
          mt-12
          bg-blue-50
          border
          rounded-2xl
          p-6
        "
      >
        <h2 className="text-2xl font-bold mb-3">
          Interview Tips
        </h2>

        <ul
          className="
            list-disc
            ml-6
            space-y-2
            text-slate-700
          "
        >
          <li>
            Always explain concepts with a
            real-world scenario.
          </li>

          <li>
            Mention performance implications
            whenever discussing React Hooks.
          </li>

          <li>
            Be prepared for follow-up questions
            on Context API, Redux, React Query,
            SSR and authentication.
          </li>

          <li>
            When discussing optimization,
            mention React.memo, useMemo,
            useCallback, virtualization,
            lazy loading and code splitting.
          </li>

          <li>
            For senior roles, interviewers
            expect architectural discussions,
            not just definitions.
          </li>
        </ul>
      </div>

    </div>
  );
}