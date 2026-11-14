type Props = {
  question: string;
  answer: string;
  example: string;
};

export default function QuestionCard({
  question,
  answer,
  example
}: Props) {
  return (
    <div
      className="
      bg-white
      p-4
      md:p-6
      rounded-xl
      shadow
      mb-5"
    >
      <h3
        className="
        text-lg
        md:text-xl
        font-bold
        mb-3"
      >
        {question}
      </h3>

      <p
        className="
        text-gray-700
        text-sm
        md:text-base"
      >
        {answer}
      </p>

      <pre
        className="
        mt-4
        bg-slate-900
        text-green-400
        p-3
        rounded
        overflow-x-auto
        text-xs
        md:text-sm"
      >
        {example}
      </pre>
    </div>
  );
}